from django.db import models


class Document(models.Model):
    template = models.ForeignKey("Template", on_delete=models.CASCADE, name="documents")
    worker = models.ForeignKey("Worker", on_delete=models.CASCADE, name="documents")
    managers = models.ManyToManyField(
        "ClientManager",
        through="DocumentAssign",
        through_fields=("document", "manager"),
    )
    # reg_number
