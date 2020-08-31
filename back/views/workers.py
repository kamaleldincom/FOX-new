from back.models import Worker
from back.serializers import WorkerListSerializer, WorkerSerializer
from rest_framework import generics


class WorkerList(generics.ListAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerListSerializer

    def get_queryset(self):
        user = self.request.user
        return Worker.objects.filter(contractor=user)


class WorkerCreate(generics.CreateAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer


class WorkerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer

    def get_queryset(self):
        user = self.request.user
        return Worker.objects.filter(contractor=user)
