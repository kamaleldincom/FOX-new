from django.http import HttpResponse, JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.views import APIView
from back.models import Document
from back.serializers import DocumentSerializer, DocumentListSerializer
from back.services import (
    DocumentFileService,
    DocumentFileJWTCreator,
    DocumentFileJWTReader,
)


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
        document = DocumentFileService(pk, Document)
        response = HttpResponse(
            document.read(), content_type="application/octet-stream"
        )
        response["Content-Disposition"] = f"attachment; filename={document.name}"
        return response


class DocumentDisplayPermission(APIView):
    def get(self, request, pk, format=None):

        jwt_creator = DocumentFileJWTCreator(pk=pk)

        return JsonResponse(
            {"parts": jwt_creator.parts, "doc_type": jwt_creator.doc_type}
        )


def download_file_to_display(request, part1, part2, part3):
    file_reader = DocumentFileJWTReader(part1=part1, part2=part2, part3=part3)
    response = HttpResponse(file_reader.read(), content_type="application/octet-stream")
    response["Content-Disposition"] = f"attachment; filename={file_reader.name}"
    return response
