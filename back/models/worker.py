from django.db import models


def project_docs_path(instance, filename):
    return "project_{0}/workers/{1}".format(instance.contractor.id, filename)


class Worker(models.Model):
    name = models.CharField(max_length=64)
    contractor = models.ForeignKey(
        "Contractor", on_delete=models.CASCADE, related_name="workers"
    )
    birthday = models.DateField()
    card_number_id = models.CharField(max_length=64)
    license_number = models.CharField(max_length=64)
    license_scan = models.FileField(upload_to=project_docs_path, null=True, blank=True)
    passport = models.CharField(max_length=64, null=True)
    passport_scan = models.FileField(upload_to=project_docs_path, null=True, blank=True)
    safety_green_card = models.CharField(max_length=64)
    safety_green_card_scan = models.FileField(
        upload_to=project_docs_path, null=True, blank=True
    )
    position_in_company = models.CharField(max_length=64)
    safety_quiz_answer = models.FileField(
        upload_to=project_docs_path, null=True, blank=True
    )
    personal_declaration = models.FileField(
        upload_to=project_docs_path, null=True, blank=True
    )

    class Meta:
        verbose_name = "Worker"

    def __str__(self):
        return f"{self.name}"
