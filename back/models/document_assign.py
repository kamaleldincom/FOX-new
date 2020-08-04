from django.db import models


class DocumentAssign(models.Model):
    document = models.ForeignKey("Document", on_delete=models.CASCADE)
    manager = models.ForeignKey("ClientManager", on_delete=models.CASCADE)
    issue_date = models.DateField(auto_now_add=True)
    change_date = models.DateField(auto_now=True)
    approve = models.BooleanField(null=True)
    last_approve_date = models.DateField()
