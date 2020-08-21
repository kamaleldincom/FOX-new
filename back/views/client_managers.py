from back.models import ClientManager
from back.serializers import ClientManagerSerializer, ClientManagerListSerializer
from rest_framework import generics


class ClientManagerList(generics.ListAPIView):
    serializer_class = ClientManagerListSerializer

    def get_queryset(self):
        user = self.request.user
        return ClientManager.objects.filter(company=user.company)


class ClientManagerCreate(generics.CreateAPIView):

    queryset = ClientManager.objects.all()
    serializer_class = ClientManagerSerializer


class ClientManagerDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ClientManagerSerializer

    def get_queryset(self):
        user = self.request.user
        return ClientManager.objects.filter(company=user.company)
