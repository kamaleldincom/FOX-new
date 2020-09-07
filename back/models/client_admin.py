from django.db import models
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from back.signals.mailing_signals import send_mail_on_creation
from django.contrib.auth import get_user_model

FoxUser = get_user_model()


class ClientAdmin(FoxUser):
    class Role(models.TextChoices):
        admin = "Admin", _("Administrator")

    class Meta:
        verbose_name = "Client Administrator"

    def __str__(self):
        return f"{self.username}"


post_save.connect(send_mail_on_creation, sender=ClientAdmin)
