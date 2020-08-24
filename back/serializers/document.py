from rest_framework import serializers
from back.models import Document


class DocumentListSerializer(serializers.ModelSerializer):
    project_name = serializers.CharField(read_only=True, source="project.name")

    class Meta:
        model = Document
        fields = ["name", "project_name", "target_type"]


class DocumentSerializer(serializers.ModelSerializer):
    target_type_choices = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = [
            "name",
            "file",
            "origin_filename",
            "project",
            "target_type",
            "url_to_doc",
            "target_type_choices",
        ]

    def get_target_type_choices(self, obj):
        return obj.TargetType.choices
