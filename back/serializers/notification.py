from rest_framework import serializers
from back.models import Notification


class NotificationListSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()

    class Meta:
        model = Notification
        fields = ["id", "text", "emitted", "unread"]

    def get_text(self, obj):
        return obj.message.text


class NotificationUpdateSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()

    class Meta:
        model = Notification
        fields = ["id", "text", "emitted", "unread", "receiver", "message"]

    def get_text(self, obj):
        return obj.message.text
