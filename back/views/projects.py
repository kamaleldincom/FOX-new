from back.models import Project, Company
from back.serializers import ProjectSerializer
from rest_framework import generics


class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def pre_save(self, obj):
        obj.company = Company()


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def pre_save(self, obj):
        obj.company = Company()
