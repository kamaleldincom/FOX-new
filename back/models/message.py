from django.db import models


class Message(models.Model):
    text = models.TextField(default="Empty message")
    receivers = models.ManyToManyField(
        to="FoxUser", through="Notification", related_name="messages"
    )
    forward_link = models.URLField(default="https://www.google.com/")

    def __str__(self):
        return self.text
