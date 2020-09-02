from django.db import models


def company_docs_path(instance, filename):
    return "company_{0}/{1}".format(instance.pk, filename)


class Company(models.Model):
    name = models.CharField(max_length=50)
    safety_video_url = models.URLField(
        null=True, blank=True, default="https://www.youtube.com/embed/ORUJ6gWBhrY"
    )
    personal_declaration_template = models.FileField(
        upload_to=company_docs_path, null=True, blank=True
    )
    safety_quiz_template = models.FileField(
        upload_to=company_docs_path, null=True, blank=True
    )

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    def __str__(self):
        return f"{self.name}"

    def __repr__(self):
        return self.__str__()
