from django.db import models


class Message(models.Model):
    text = models.TextField(default="Empty message")
    receivers = models.ManyToManyField(
        to="FoxUser", through="Notification", related_name="messages"
    )

    def __str__(self):
        return self.text
