from rest_framework import generics
from back.models import Notification
from back.serializers import NotificationListSerializer, NotificationUpdateSerializer
from django.conf import settings

MAX_NOTIFICATION_DISPLAY = settings.MAX_NOTIFICATION_DISPLAY


class NotificationList(generics.ListAPIView):
    serializer_class = NotificationListSerializer

    def get_queryset(self):
        user = self.request.user
        notifications = Notification.objects.filter(receiver=user).order_by("-pk")
        if notifications.filter(unread=True).count() >= MAX_NOTIFICATION_DISPLAY:
            return notifications.filter(unread=True)
        else:

            return notifications[:MAX_NOTIFICATION_DISPLAY]


class NotificationUpdate(generics.UpdateAPIView):
    serializer_class = NotificationUpdateSerializer

    def get_queryset(self):
        user = self.request.user
        return Notification.objects.filter(receiver=user)
