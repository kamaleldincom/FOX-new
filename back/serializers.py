from rest_framework import serializers
from .models import TestUser
from django.contrib.auth.models import User


class TestUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestUser
        fields = ("id", "name", "email", "message")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "password")
