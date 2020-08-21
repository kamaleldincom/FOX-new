from back.models import ClientManager
from back.serializers import ClientManagerSerializer
from rest_framework import generics


class ClientManagerList(generics.ListCreateAPIView):
    queryset = ClientManager.objects.all()
    serializer_class = ClientManagerSerializer


class ClientManagerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClientManager.objects.all()
    serializer_class = ClientManagerSerializer
