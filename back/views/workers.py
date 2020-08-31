from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from back.models import Worker
from back.serializers import WorkerListSerializer, WorkerSerializer


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


class WorkerDocDownload(APIView):
    def get(self, request, pk, doctype, format=None):
        worker = Worker.objects.get(pk=pk)
        document = getattr(worker, doctype)
        document.open("rb")
        response = HttpResponse(
            document.read(), content_type="application/octet-stream"
        )
        response["Content-Disposition"] = f"attachment; filename={document.name}"
        return response
