from django.db import models


class Template(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    work = models.ForeignKey("Work", on_delete=models.CASCADE, name="templates")
