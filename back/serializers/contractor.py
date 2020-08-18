from rest_framework import serializers
from back.models import Contractor


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ["id", "name", "projects"]
