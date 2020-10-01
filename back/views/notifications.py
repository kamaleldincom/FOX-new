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
        unread_notifications_count = notifications.filter(unread=True).count()
        if unread_notifications_count >= MAX_NOTIFICATION_DISPLAY:
            return notifications.filter(unread=True)
        else:
            unread_notifications = notifications.filter(unread="True")
            extra_notifications = notifications.filter(unread=False)[
                : (MAX_NOTIFICATION_DISPLAY - unread_notifications_count)
            ]
            return unread_notifications.union(extra_notifications).order_by(
                "-unread", "-pk"
            )
            return notifications[:MAX_NOTIFICATION_DISPLAY]


class NotificationUpdate(generics.UpdateAPIView):
    serializer_class = NotificationUpdateSerializer

    def get_queryset(self):
        user = self.request.user
        return Notification.objects.filter(receiver=user)
