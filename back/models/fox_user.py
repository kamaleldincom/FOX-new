from django.db import models
from django.contrib.auth.models import AbstractUser


class FoxUser(AbstractUser):
    company = models.ForeignKey("Company", on_delete=models.CASCADE, null=True)
