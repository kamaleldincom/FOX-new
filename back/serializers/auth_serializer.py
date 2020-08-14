from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

# from .models import TestUser
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


FoxUser = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    company_name = serializers.ReadOnlyField(source="company.name")

    class Meta:
        model = FoxUser
        fields = ("username", "role", "company_name")


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    # company_name = serializers.Field(source="company.name")

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = FoxUser
        fields = ("token", "username", "password", "role", "company")
