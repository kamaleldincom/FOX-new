from rest_framework import serializers
from back.models import ClientManager


class ClientManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientManager
        fields = [
            "id",
            "username",
            "position",
        ]
