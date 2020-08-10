from django.db import models
from django.contrib.auth.models import AbstractUser

# from django.db.models.signals import post_save

# from back.services import send_mail_on_creation

# from django.utils.translation import gettext_lazy as _


class FoxUser(AbstractUser):
    company = models.ForeignKey("Company", on_delete=models.CASCADE, null=True)


# post_save.connect(send_mail_on_creation, sender=FoxUser)
