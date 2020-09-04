from rest_framework import serializers
from back.models import Document


class DocumentListSerializer(serializers.ModelSerializer):
    project_name = serializers.CharField(read_only=True, source="project.name")
    filename = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ["id", "name", "project_name", "url_to_doc", "filename"]

    def get_filename(self, obj):
        return obj.file.name


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"
