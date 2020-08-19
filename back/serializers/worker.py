from rest_framework import serializers
from back.models import Worker


class WorkerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker

        fields = [
            "id",
            "name",
            "position_in_cmopany",
        ]


class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker

        fields = "__all__"
