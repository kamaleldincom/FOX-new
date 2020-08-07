from django.db import models
from django.utils.translation import gettext_lazy as _
from .fox_user import FoxUser


class Contractor(FoxUser):
    class Type(models.TextChoices):
        default = "Default", _("Contractor")

    type = models.CharField(max_length=10, choices=Type.choices, default=Type.default,)
