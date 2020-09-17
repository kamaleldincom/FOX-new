from rest_framework import generics
from back.models import Project, Activity
from back.serializers import ProjectSerializer, ProjectListSerializer


class ProjectList(generics.ListAPIView):
    serializer_class = ProjectListSerializer

    def get_queryset(self):
        user = self.request.user
        if user.role == "Contr":
            return Project.objects.filter(company=user.company, contractor=user)
        return Project.objects.filter(company=user.company)


class ProjectCreate(generics.CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def create(self, request, *args, **kwargs):
        res = super(ProjectCreate, self).create(request, args, kwargs)
        project = Project.objects.get(pk=res.data["id"])
        activity = Activity(
            project=project, author=request.user, company=request.user.company
        )
        activity.project_created_message()
        return res


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        user = self.request.user
        return Project.objects.filter(company=user.company)

    def patch(self, request, *args, **kwargs):

        if kwargs["pk"]:
            prev_project = Project.objects.get(pk=kwargs["pk"])

        res = super(ProjectDetail, self).patch(request, args, kwargs)
        project = Project.objects.get(pk=res.data["id"])
        if prev_project.status != project.status:
            activity = Activity(
                project=project, author=request.user, company=request.user.company
            )
            activity.project_status_updated_message(project.status)
        return res
