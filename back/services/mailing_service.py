# from django.contrib.auth.models import User
import logging
from django.conf import settings
from django.core.mail import send_mail

from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse

from django_rest_passwordreset.signals import reset_password_token_created

from django_rest_passwordreset.models import (
    ResetPasswordToken,
    clear_expired,
    get_password_reset_token_expiry_time,
    get_password_reset_lookup_field,
)


logger = logging.getLogger(__name__)


@receiver(reset_password_token_created)
def password_reset_token_created(
    sender, instance, reset_password_token, *args, **kwargs
):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    logger.warning(
        "send an e-mail to the user [%s]", reset_password_token.user.username
    )

    # URL_FORMAT = "http://46.101.221.249:8000/#/register?token={}&username={}"
    URL_FORMAT = "http://127.0.0.1:8000/#/register?token={}&username={}"

    context = {
        "current_user": reset_password_token.user,
        "username": reset_password_token.user.username,
        "email": reset_password_token.user.email,
        "reset_password_url": URL_FORMAT.format(
            # reverse("password_reset:reset-password-request"),
            reset_password_token.key,
            reset_password_token.user.username,
        ),
    }

    # render email text
    email_html_message = render_to_string("email/user_reset_password.html", context)
    email_plaintext_message = render_to_string("email/user_reset_password.txt", context)

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        settings.EMAIL_HOST_USER,
        # to:
        [reset_password_token.user.email],
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()


def send_mail_on_creation(**kwargs):
    user = kwargs["instance"]
    logger.warning("WE TRIED TO SEND EMAIL to [%s]", user.username)
    token = ResetPasswordToken.objects.create(user=user)
    # send a signal that the password token was created
    # let whoever receives this signal handle sending the email for the password reset
    reset_password_token_created.send(
        sender=user.__class__, instance=user, reset_password_token=token
    )
