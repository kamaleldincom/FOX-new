from back.models import Worker
from back.serializers import WorkerListSerializer, WorkerSerializer
from rest_framework import generics


class WorkerList(generics.ListCreateAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerListSerializer


class WorkerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer
