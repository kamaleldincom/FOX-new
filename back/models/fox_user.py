from django.db import models
from django.contrib.auth.models import User
from . import Company


class FoxUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        abstract = True
