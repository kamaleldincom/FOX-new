from rest_framework import serializers
from back.models import WorkerSpecialCompetency


class WorkerSpecialCompetencyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerSpecialCompetency

        fields = ["id", "name", "issued_by"]


class WorkerSpecialCompetencySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerSpecialCompetency
        fields = "__all__"
