from django.db import models
from datetime import datetime


class Activity(models.Model):
    message = models.TextField(null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    project = models.ForeignKey(
        "Project", on_delete=models.SET_NULL, related_name="activities", null=True
    )
    author = models.ForeignKey(
        "FoxUser", on_delete=models.SET_NULL, related_name="activities", null=True
    )
    company = models.ForeignKey(
        "Company", on_delete=models.SET_NULL, related_name="activities", null=True
    )

    def __str__(self):
        return f"{self.message}"

    def project_created_message(self):
        self.message = "[{0}] Project created by admin {1}".format(
            datetime.now().strftime("%m/%d/%Y, %H:%M"),
            self.author.username,
        )
        self.save()

    def proposal_submition_message(self):
        self.message = "[{0}] Submitted proposal by contractor {1}".format(
            datetime.now().strftime("%m/%d/%Y, %H:%M"),
            self.author.contractor.related_company,
        )
        self.save()
