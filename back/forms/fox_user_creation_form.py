from django import forms
from django.contrib.auth.forms import UserCreationForm
from back.models import FoxUser


class FoxUserCreationform(UserCreationForm):
    email = forms.EmailField(max_length=120, help_text="Required")

    class Meta:
        model = FoxUser
        fields = (
            "username",
            "email",
        )
