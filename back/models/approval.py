from django.db import models
from django.utils.translation import gettext_lazy as _


class Approval(models.Model):
    class Status(models.TextChoices):
        pending = "Pending", _("Pending")
        approved = "Approved", _("Approved")
        rejected = "Rejected", _("Rejected")
        auto_rejected = "Deprecated", _("Deprecated")

    description = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    last_resolved = models.DateTimeField(auto_now=True)
    status = models.CharField(
        max_length=16, choices=Status.choices, default=Status.pending
    )
    project = models.ForeignKey(
        to="Project", on_delete=models.SET_NULL, related_name="approvals", null=True,
    )
    manager = models.ForeignKey(
        "ClientManager",
        related_name="approvals",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = "Approval"

    def __str__(self):
        return f"{self.project}-{self.manager}"
