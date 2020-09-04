from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from back.models import Document
from back.serializers import DocumentSerializer, DocumentListSerializer
from django_filters.rest_framework import DjangoFilterBackend


class DocumentList(generics.ListAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentListSerializer

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["project_id"]


class DocumentCreate(generics.CreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class DocumentDownload(APIView):
    def get(self, request, pk, format=None):
        document = Document.objects.get(pk=pk)
        document.file.open("rb")
        response = HttpResponse(
            document.file.read(), content_type="application/octet-stream"
        )
        response["Content-Disposition"] = f"attachment; filename={document.file.name}"
        return response
