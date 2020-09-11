from rest_framework import serializers
from back.models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


class CompanyDocsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            "safety_video_url",
            "personal_declaration_template",
            "safety_quiz_template",
        ]
