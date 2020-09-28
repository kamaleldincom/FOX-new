from django.db import models


class Notification(models.Model):
    message = models.ForeignKey(
        to="Message", on_delete=models.CASCADE, related_name="notifications"
    )
    receiver = models.ForeignKey(
        to="FoxUser", on_delete=models.CASCADE, related_name="notifications"
    )
    unread = models.BooleanField(default=True)

    def __str__(self):
        return self.text
