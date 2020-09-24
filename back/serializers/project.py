from rest_framework import serializers
from back.models import Project


class ProjectListSerializer(serializers.ModelSerializer):

    application_status = serializers.SerializerMethodField()
    work_status = serializers.SerializerMethodField()
    start_date = serializers.SerializerMethodField()
    end_date = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "name",
            "start_date",
            "end_date",
            "contractor_name",
            "location",
            "status",
            "application_status",
            "work_status",
        ]

    def get_application_status(self, obj):
        status = obj.status
        status_options = {
            "Created": "Created",
            "Submitted": "Submitted",
            "Approved": "Approved",
            "Rejected": "Rejected",
            "Closed": "Closed",
        }
        application_status = (
            status_options[status] if status in status_options.keys() else "Approved"
        )
        return application_status

    def get_work_status(self, obj):
        status = obj.status
        status_options = {
            "Approved": "Ready to start",
            "Works_started": "Works started",
            "Works_finished": "Works finished",
            "Extended": "Extended",
            "Closed": "Closed",
        }
        work_status = (
            status_options[status]
            if status in status_options.keys()
            else "Application processing"
        )
        return work_status

    def get_start_date(self, obj):
        return obj.start_date.strftime("%d %b %Y")

    def get_end_date(self, obj):
        return obj.end_date.strftime("%d %b %Y")


class ProjectSerializer(serializers.ModelSerializer):

    start_date = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%S")
    end_date = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%S")

    class Meta:
        model = Project
        fields = "__all__"
