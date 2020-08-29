from django.db import models
from django.utils.translation import gettext_lazy as _

# from .fox_user import FoxUser
from django.db.models.signals import post_save
from back.services import send_mail_on_creation

from django.contrib.auth import get_user_model

FoxUser = get_user_model()


class ClientManager(FoxUser):
    class Position(models.TextChoices):
        safety_manager = "SafeMan", _("Safety Manager")
        security_manager = "SecMan", _("Security Manager")
        safety_officer = "SecOff", _("Security Officer")
        site_owner = "SiteOwn", _("Site Owner")
        work_owner = "WorkOwn", _("Owner of Work")
        security_guards = "SecGrd", _("Security Guards")

    position = models.CharField(
        max_length=10, choices=Position.choices, default=Position.site_owner,
    )

    class Meta:
        verbose_name = "Client Manager"


post_save.connect(send_mail_on_creation, sender=ClientManager)
