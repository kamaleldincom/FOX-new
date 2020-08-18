from back.models import Contractor
from back.serializers import ContractorSerializer
from rest_framework import generics


class ContractorList(generics.ListCreateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer


class ContractorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
