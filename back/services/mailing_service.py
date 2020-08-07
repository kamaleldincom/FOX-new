from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import pre_save
from django.core.mail import send_mail


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
