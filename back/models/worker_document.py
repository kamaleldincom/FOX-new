import os
from django.conf import settings
from django.db import models


def worker_docs_path():
    return os.path.join(settings.LOCAL_FILE_DIR, "worker_docs")


class WorkerDocument(models.Model):
    template = models.ForeignKey(
        "Document", on_delete=models.CASCADE, related_name="worker_documents"
    )
    worker = models.ForeignKey(
        "Document", on_delete=models.CASCADE, related_name="related_documents"
    )
    file = models.FilePathField(path=worker_docs_path)
    origin_filename = models.CharField(max_length=256)
