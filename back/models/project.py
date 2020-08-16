from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    start_date = models.DateField(null=True)
    company = models.ForeignKey(
        "Company", on_delete=models.CASCADE, name="Company", null=True
    )
    contractors = models.ManyToManyField("Contractor", related_name="projects")

    class Meta:
        verbose_name = "Project"

    def __str__(self):
        return f"{self.name}"
