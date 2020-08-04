from django.db import models


class Permit(models.Model):
    project = models.ForeignKey("Project", on_delete=models.CASCADE, name="permits")
    worker = models.ForeignKey("Worker", on_delete=models.CASCADE, name="permits")
    issue_date = models.DateField(auto_now_add=True)
    end_date = models.DateField()
    active = models.BooleanField(default=True)
