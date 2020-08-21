from rest_framework import serializers
from back.models import Template


class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template

        fields = [
            "id",
            "name",
            "description",
        ]
