from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import pre_save
from django.core.mail import send_mail


class TestUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


def send_mail_on_creation(**kwargs):
    user = kwargs["instance"]
    send_mail(
        subject="Created Account in Fox",
        message="You have account created in Fox company.\nYour credentials:\nUsername: {}\n Password: {}".format(
            user.username, user.password,
        ),
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[user.email],
        fail_silently=False,
        auth_user=settings.EMAIL_HOST_USER,
        auth_password=settings.EMAIL_HOST_PASSWORD,
    )


pre_save.connect(send_mail_on_creation, sender=User)
