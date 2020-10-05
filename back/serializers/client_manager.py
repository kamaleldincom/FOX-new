from rest_framework import serializers
from back.models import ClientManager


class ClientManagerListSerializer(serializers.ModelSerializer):

    position = serializers.SerializerMethodField()

    class Meta:

        model = ClientManager
        fields = ["id", "name", "position", "department"]

    def get_position(self, obj):
        return ClientManager.Position(obj.position).label


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
            # "is_active",
        ]
