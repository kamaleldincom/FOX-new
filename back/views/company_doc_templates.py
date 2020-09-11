from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from back.models import Company
from back.serializers import CompanyDocsSerializer


class CompanyDocUpload(generics.RetrieveUpdateAPIView):
    serializer_class = CompanyDocsSerializer

    def get_queryset(self):
        user = self.request.user
        return Company.objects.filter(pk=user.company.pk)


class CompanyDocDownload(APIView):
    def get(self, request, doctype, format=None):
        if doctype not in ["personal_declaration_template", "safety_quiz_template"]:
            content = {"error": "Invalid template type"}
            return Response(content, status=status.HTTP_404_NOT_FOUND)
        company = get_object_or_404(Company, pk=request.user.company.pk)
        user_check = company.fox_users.get(pk=request.user.pk)
        if user_check is None:
            content = {"error": "User does not belong to this company"}
            return Response(content, status=status.HTTP_404_NOT_FOUND)
        document = getattr(company, doctype)
        try:
            document.open("rb")
        except ValueError:
            content = {"error": "File not found"}
            return Response(content, status=status.HTTP_404_NOT_FOUND)
        response = HttpResponse(
            document.read(), content_type="application/octet-stream"
        )
        response["Content-Disposition"] = f"attachment; filename={document.name}"
        return response
