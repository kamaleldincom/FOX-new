from rest_framework import serializers
from back.models import Project


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = [
            "id",
            "name",
            "description",
            "start_date",
            "end_date",
            "contractor_name",
        ]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
