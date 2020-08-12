from django.db import models
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from back.services import send_mail_on_creation
from django.contrib.auth import get_user_model

FoxUser = get_user_model()


class Contractor(FoxUser):
    class Type(models.TextChoices):
        default = "Default", _("Contractor")

    contractor_type = models.CharField(
        max_length=10, choices=Type.choices, default=Type.default,
    )

    class Meta:
        verbose_name = "Contractor"


post_save.connect(send_mail_on_creation, sender=Contractor)
