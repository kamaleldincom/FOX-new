from django.db import models
from django.utils.translation import gettext_lazy as _


class Project(models.Model):
    class Status(models.TextChoices):
        created = "Created", _("Created")
        submitted = "Submitted", _("Submitted")
        approved = "Approved", _("Approved")
        rejected = "Rejected", _("Rejected")
        works_started = "Works_started", _("Works started")
        works_finished = "Works_finished", _("Works finished")
        extended = "Extended", _("Extended")
        closed = "Closed", _("Closed")

    name = models.CharField(max_length=64)
    description = models.TextField()
    start_date = models.DateField(null=True)
    start_time = models.TimeField(null=True)
    end_date = models.DateField(null=True)
    end_time = models.TimeField(null=True)
    status = models.CharField(
        max_length=16, choices=Status.choices, default=Status.created
    )
    company = models.ForeignKey(
        to="Company", on_delete=models.CASCADE, related_name="projects", null=True
    )
    contractor = models.ForeignKey(
        to="Contractor", on_delete=models.SET_NULL, related_name="projects", null=True
    )
    workers = models.ManyToManyField("Worker", related_name="projects", blank=True)

    class Meta:
        verbose_name = "Project"

    def __str__(self):
        return f"{self.name}"

    @property
    def company_name(self):
        return self.company.name

    @property
    def contractor_name(self):
        # return ",".join([c.username for c in self.contractors])
        return self.contractor.username
