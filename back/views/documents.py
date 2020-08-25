from back.models import Document, Project
from back.serializers import DocumentSerializer, DocumentListSerializer
from rest_framework import generics
from back.logger import log


class DocumentList(generics.ListAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentListSerializer

    def get_queryset(self):
        project_id = self.request.query_params.get("project_id", None)
        if not project_id:
            log(log.ERROR, "Project id is absent")
            return []
        project = Project.objects.get(pk=project_id)

        return Document.objects.filter(project=project)


class DocumentCreate(generics.CreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
