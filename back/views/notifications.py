from rest_framework import generics
from back.models import Notification
from back.serializers import NotificationListSerializer, NotificationUpdateSerializer


class NotificationList(generics.ListAPIView):
    serializer_class = NotificationListSerializer

    def get_queryset(self):
        user = self.request.user
        notifications = Notification.objects.filter(receiver=user).order_by("-pk")
        if notifications.count(unread=True) > 5:
            return notifications.filter(unread=True)
        else:
            return notifications[:5]


class NotificationUpdate(generics.UpdateAPIView):
    serializer_class = NotificationUpdateSerializer

    def get_queryset(self):
        user = self.request.user
        return Notification.objects.filter(receiver=user, unread=True)
