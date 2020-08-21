from rest_framework import serializers
from back.models import Contractor


class ContractorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ["id", "username", "project_list"]


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ["id", "username", "email", "company", "role"]
