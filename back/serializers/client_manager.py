from rest_framework import serializers
from back.models import ClientManager


class ClientManagerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientManager
        fields = ["id", "username", "name", "position", "department"]


class ClientManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientManager
        fields = [
            "id",
            "username",
            "name",
            "email",
            "company",
            "role",
            "position",
            "department",
        ]
