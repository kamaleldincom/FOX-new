from back.models import Template
from back.serializers import TemplateSerializer
from rest_framework import generics


class TemplateList(generics.ListCreateAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer


class TemplateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer
