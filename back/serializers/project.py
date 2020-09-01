from rest_framework import serializers
from back.models import Project


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = ["id", "name", "start_date", "end_date", "contractor_name", "status"]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
