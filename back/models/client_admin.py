from django.db import models
from django.utils.translation import gettext_lazy as _
from .fox_user import FoxUser
from django.db.models.signals import post_save
from back.services import send_mail_on_creation


class ClientAdmin(FoxUser):
    class Role(models.TextChoices):
        admin = "Admin", _("Administrator")

    role = models.CharField(max_length=10, choices=Role.choices, default=Role.admin,)

    class Meta:
        verbose_name = "Client Administrator"


post_save.connect(send_mail_on_creation, sender=ClientAdmin)
