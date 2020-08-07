from django.db import models


class Work(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
