from django.db import models
from django.utils.translation import gettext_lazy as _
from . import FoxUser


class ClientAdmin(FoxUser):
    class Role(models.TextChoices):
        admin = "Admin", _("Administrator")

    role = models.CharField(
        max_length=10, choices=Role.choices, default=Role.admin,
    )
