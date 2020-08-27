import os
from django.conf import settings
from django.db import models


def project_docs_path(instance, filename):
    return "project_{0}/{1}".format(instance.project.id, filename)


class WorkerDocument(models.Model):
    template = models.ForeignKey(
        "Document", on_delete=models.CASCADE, related_name="worker_documents"
    )
    worker = models.ForeignKey(
        "Document", on_delete=models.CASCADE, related_name="related_documents"
    )
    file = models.FileField(upload_to=project_docs_path, null=True, blank=True)
