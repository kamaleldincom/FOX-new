from rest_framework import serializers
from .models import TestUser


class TestUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestUser
        fields = ("id", "name", "email", "message")
