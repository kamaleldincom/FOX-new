import os
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings


def project_docs_path():
    return os.path.join(settings.LOCAL_FILE_DIR, "project_docs")


class Document(models.Model):
    class TargetType(models.TextChoices):
        contractor = "Contr", _("Contractor")
        worker = "Work", _("Worker")

    name = models.CharField(max_length=128, null=True)
    file = models.FilePathField(path=project_docs_path, null=True)
    origin_filename = models.CharField(max_length=256, null=True)
    project = models.ForeignKey(
        "back.Project", on_delete=models.CASCADE, related_name="documents", null=True
    )
    target_type = models.CharField(
        max_length=12, choices=TargetType.choices, default=TargetType.contractor
    )
    url_to_doc = models.URLField(null=True)

    def __str__(self):
        return f"{self.name}"
