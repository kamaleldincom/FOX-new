from back.models import Contractor
from back.serializers import ContractorSerializer, ContractorListSerializer
from rest_framework import generics


class ContractorList(generics.ListAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorListSerializer


class ContractorCreate(generics.CreateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer


class ContractorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
