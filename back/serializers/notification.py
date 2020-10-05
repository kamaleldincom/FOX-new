from rest_framework import serializers
from back.models import Notification


class NotificationListSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    forward_link = serializers.SerializerMethodField()

    class Meta:
        model = Notification
        fields = ["id", "text", "emitted", "unread", "forward_link"]

    def get_text(self, obj):
        return obj.message.text

    def get_forward_link(self, obj):
        return obj.message.forward_link


class NotificationUpdateSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    forward_link = serializers.SerializerMethodField()

    class Meta:
        model = Notification
        fields = [
            "id",
            "text",
            "emitted",
            "unread",
            "receiver",
            "message",
            "forward_link",
        ]

    def get_text(self, obj):
        return obj.message.text

    def get_forward_link(self, obj):
        return obj.message.forward_link
