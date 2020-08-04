from django.db import models
from django.utils.translation import gettext_lazy as _


class TemplateItem(models.Model):
    class Type(models.TextChoices):
        text = "text", _("Text")
        password = "password", _("Password")
        email = "email", _("Email")
        checkbox = "checkbox", _("Checkbox")
        select = "select", _("Select")

    name = models.CharField(max_length=64)
    description = models.TextField()
    template = models.ForeignKey("Template", on_delete=models.CASCADE, name="items")
    type = models.CharField(max_length=10, choices=Type.choices, default=Type.default,)
    type_values = models.TextField()
    placeholder = models.CharField(max_length=64)
