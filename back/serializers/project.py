from rest_framework import serializers
from back.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        company_name = serializers.ReadOnlyField(source="company.name")
        fields = [
            "id",
            "name",
            "description",
            "start_date",
            "company_name",
            # "contractors",
        ]
