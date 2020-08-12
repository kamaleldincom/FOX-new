from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import PasswordResetForm
from django.utils.crypto import get_random_string
from django import forms
from django.contrib.auth import get_user_model
from .forms import (
    FoxUserCreationForm,
    ClientAdminCreationForm,
    ClientManagerCreationForm,
    ContractorCreationForm,
)
from .models import ClientAdmin, ClientManager, Contractor

FoxUser = get_user_model()


class FoxUserAdmin(UserAdmin):
    """
    A UserAdmin that sends a password-reset email when creating a new user,
    unless a password was entered.
    """

    add_form = FoxUserCreationForm()
    add_fieldsets = (
        (
            None,
            {
                "description": (
                    "Enter the new user's name and email address and click save."
                    " The user will be emailed a link allowing them to login to"
                    " the site and set their password."
                ),
                "fields": ("email", "username",),
            },
        ),
        (
            "Password",
            {
                "description": "Optionally, you may set the user's password here.",
                "fields": ("password1", "password2", "role"),
                "classes": ("collapse", "collapse-closed"),
            },
        ),
    )

    def save_model(self, request, obj, form, change):
        if not change and not obj.has_usable_password():
            # Django's PasswordResetForm won't let us reset an unusable
            # password. We set it above super() so we don't have to save twice.
            obj.set_password(get_random_string())
            reset_password = True
        else:
            reset_password = False

        super(FoxUserAdmin, self).save_model(request, obj, form, change)

        if reset_password:
            reset_form = PasswordResetForm({"email": obj.email})
            assert reset_form.is_valid()
            reset_form.save(
                subject_template_name="registration/account_creation_subject.txt",
                email_template_name="registration/account_creation_email.html",
            )


class ClientAdminAdmin(FoxUserAdmin):

    add_form = ClientAdminCreationForm


class ClientManagerAdmin(FoxUserAdmin):

    add_form = ClientManagerCreationForm


class ContractorAdmin(FoxUserAdmin):

    add_form = ContractorCreationForm


admin.site.register(get_user_model(), FoxUserAdmin)
admin.site.register(ClientAdmin, ClientAdminAdmin)
admin.site.register(ClientManager, ClientManagerAdmin)
admin.site.register(Contractor, ContractorAdmin)
