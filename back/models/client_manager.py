from django.db import models
from django.utils.translation import gettext_lazy as _
from .fox_user import FoxUser


class ClientManager(FoxUser):
    class Role(models.TextChoices):
        safety_manager = "SafeMan", _("Safety Manager")
        security_manager = "SecMan", _("Security Manager")
        safety_officer = "SecOff", _("Safety Officer")
        site_owner = "SiteOwn", _("Site Oswner")
        work_owner = "WorkOwn", _("Owner of Work")
        security_guards = "SecGrd", _("Security Guards")

    role = models.CharField(
        max_length=10, choices=Role.choices, default=Role.site_owner,
    )
