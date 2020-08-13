from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser

# from django.db.models.signals import post_save

# from back.services import send_mail_on_creation

# from django.utils.translation import gettext_lazy as _


class FoxUser(AbstractUser):
    class Role(models.TextChoices):
        client_manager = "CliMan", _("Client Manager")
        client_admin = "CliAdm", _("Client Admin")
        contractor = "Contr", _("Contractor")
        dummy = "Dum", _("Dummy")

    company = models.ForeignKey("Company", on_delete=models.CASCADE, null=True)
    role = models.CharField(max_length=16, choices=Role.choices, default=Role.dummy,)
