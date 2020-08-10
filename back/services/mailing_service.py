# from django.contrib.auth.models import User
import logging
from django.conf import settings
from django.core.mail import send_mail

logger = logging.getLogger(__name__)


def send_mail_on_creation(**kwargs):
    user = kwargs["instance"]
    logger.warning("WE TRIED TO SEND EMAIL")
    link = "http://google.com"
    send_mail(
        subject="Created Account in Fox",
        message="You have account created in Fox company.\nYour credentials:\nUsername: {}.\n To approve your registration, please follow this link: \n {}".format(
            user.username, link
        ),
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[user.email],
        fail_silently=False,
        auth_user=settings.EMAIL_HOST_USER,
        auth_password=settings.EMAIL_HOST_PASSWORD,
    )
