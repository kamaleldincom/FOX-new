from rest_framework import serializers
from back.models import Contractor


class ContractorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ["id", "username", "project_list", "related_company"]


class ContractorSerializer(serializers.ModelSerializer):

    default = ""

    class Meta:
        model = Contractor
        fields = ["id", "username", "email", "company", "role", "related_company"]
