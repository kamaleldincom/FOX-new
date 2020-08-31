from django.db import models
from django.utils.translation import gettext_lazy as _


def project_docs_path(instance, filename):
    return "project_{0}/{1}".format(instance.project.id, filename)


class Document(models.Model):
    class TargetType(models.TextChoices):
        contractor = "Contractor", _("Contractor")
        worker = "Worker", _("Worker")

    name = models.CharField(max_length=128, null=True)
    file = models.FileField(upload_to=project_docs_path, null=True, blank=True)
    # origin_filename = models.CharField(max_length=256, null=True)
    project = models.ForeignKey(
        "back.Project", on_delete=models.CASCADE, related_name="documents", null=True
    )
    target_type = models.CharField(
        max_length=12, choices=TargetType.choices, default=TargetType.contractor
    )
    url_to_doc = models.URLField(null=True, blank=True)

    def __str__(self):
        return f"{self.name}"
