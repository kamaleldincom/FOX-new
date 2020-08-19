from rest_framework import serializers
from back.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = [
            "id",
            "name",
            "description",
            "start_date",
            "contractor_list",
        ]
