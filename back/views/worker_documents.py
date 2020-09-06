from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from back.models import WorkerDocument
from back.serializers import WorkerDocumentSerializer, WorkerDocumentListSerializer
from back.logger import log
from django_filters.rest_framework import DjangoFilterBackend


class WorkerDocumentList(generics.ListAPIView):
    queryset = WorkerDocument.objects.all()
    serializer_class = WorkerDocumentListSerializer

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["worker_id", "template_id"]

    # def get_queryset(self):
    #     project_id = self.request.query_params.get("project_id", None)
    #     if not project_id:
    #         log(log.ERROR, "Project id is absent")
    #         return []
    #     project = Project.objects.get(pk=project_id)

    #     return Document.objects.filter(project=project)


class WorkerDocumentCreate(generics.CreateAPIView):
    queryset = WorkerDocument.objects.all()
    serializer_class = WorkerDocumentSerializer


class WorkerDocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkerDocument.objects.all()
    serializer_class = WorkerDocumentSerializer


class WorkerDocumentDownload(APIView):
    def get(self, request, pk, format=None):
        log(log.DEBUG, "WorkerDocumentDownload.get id:[%d]", pk)
        document = WorkerDocument.objects.get(pk=pk)
        document.file.open("rb")
        response = HttpResponse(
            document.file.read(), content_type="application/octet-stream"
        )
        response["Content-Disposition"] = f"attachment; filename={document.file.name}"
        return response
