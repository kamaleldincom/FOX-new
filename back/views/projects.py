from back.models import Project
from back.serializers import ProjectSerializer, ProjectListSerializer
from rest_framework import generics


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
        response_content = res.content.decode()
        project = Project.objects.get(pk=response_content.id)
        return res


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        user = self.request.user
        return Project.objects.filter(company=user.company)


# def patch(self, request, *args, **kwargs):
#         res = super(ApprovalDetail, self).patch(request, args, kwargs)
