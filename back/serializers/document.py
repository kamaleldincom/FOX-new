from rest_framework import serializers
from back.models import Document


class DocumentListSerializer(serializers.ModelSerializer):
    project_name = serializers.CharField(read_only=True, source="project.name")
    filename = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ["id", "name", "project_name", "target_type", "url_to_doc", "filename"]

    def get_filename(self, obj):
        return obj.file.name


class DocumentSerializer(serializers.ModelSerializer):
    target_type_choices = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = [
            "name",
            "file",
            "project",
            "target_type",
            "url_to_doc",
            "target_type_choices",
        ]

    def get_target_type_choices(self, obj):
        return obj.TargetType.choices
