from rest_framework import serializers
from back.models import Activity


class ActivityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "message"]


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = "__all__"
