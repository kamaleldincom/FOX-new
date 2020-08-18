from django.db import models


class DocumentAssign(models.Model):
    document = models.ForeignKey("Document", on_delete=models.CASCADE, name="document")
    manager = models.ForeignKey(
        "ClientManager", on_delete=models.CASCADE, name="manager"
    )
    issue_date = models.DateField(auto_now_add=True)
    change_date = models.DateField(auto_now=True)
    approve = models.BooleanField(null=True)
    last_approve_date = models.DateField()

    class Meta:
        verbose_name_plural = "Document Assignments"

    def __str__(self):
        return f"Document_assign model for {self.document}"
