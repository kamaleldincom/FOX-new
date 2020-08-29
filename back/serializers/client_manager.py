from rest_framework import serializers
from back.models import ClientManager


class ClientManagerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientManager
        fields = [
            "id",
            "username",
            "position",
        ]


class ClientManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientManager
        fields = ["id", "username", "email", "company", "role", "position"]
