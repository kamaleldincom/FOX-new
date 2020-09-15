from django.db import models


def project_docs_path(instance, filename):
    return "contractors/contractor_{0}/{1}/{2}".format(
        instance.worker.contractor.id, instance.worker.id, filename
    )


class WorkerSpecialCompetency(models.Model):
    name = models.CharField(max_length=64, null=True)
    issued_by = models.CharField(max_length=64, null=True)
    worker = models.ForeignKey(
        "Worker", on_delete=models.CASCADE, related_name="special_competencies"
    )
    file = models.FileField(upload_to=project_docs_path, null=True, blank=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"
