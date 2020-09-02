from rest_framework import serializers
from back.models import Approval


class ApprovalListSerializer(serializers.ModelSerializer):

    project_name = serializers.SerializerMethodField()

    class Meta:
        model = Approval

        fields = ["id", "project_name", "created"]

    def get_project_name(self, obj):
        return obj.project.name


class ApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approval
        fields = "__all__"
