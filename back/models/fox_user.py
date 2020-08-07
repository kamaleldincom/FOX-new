from django.db import models
from django.contrib.auth.models import User


class FoxUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    company = models.ForeignKey("Company", on_delete=models.CASCADE, null=True)

    class Meta:
        abstract = True
