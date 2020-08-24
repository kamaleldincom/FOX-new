from back.models import Document, Project
from back.serializers import DocumentSerializer, DocumentListSerializer
from rest_framework import generics


class DocumentList(generics.ListAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentListSerializer

    def get_queryset(self):
        project_id = self.request.query_params.get("project_id")
        project = Project.objects.get(pk=project_id)
        return Document.objects.filter(project=project)


class DocumentCreate(generics.CreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
