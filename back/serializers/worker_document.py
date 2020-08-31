from rest_framework import serializers
from back.models import WorkerDocument


class WorkerDocumentListSerializer(serializers.ModelSerializer):

    filename = serializers.SerializerMethodField()
    workerName = serializers.SerializerMethodField()
    templateName = serializers.SerializerMethodField()

    class Meta:
        model = WorkerDocument

        fields = [
            "id",
            "filename",
            "workerName",
            "templateName",
        ]

    def get_filename(self, obj):
        return obj.file.name

    def get_workerName(self, obj):
        return obj.worker.name

    def get_templateName(self, obj):
        return obj.template.name


class WorkerDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerDocument
        fields = "__all__"
