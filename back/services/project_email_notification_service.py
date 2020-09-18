from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from back.logger import log


class ProjectEmailNotificationService:
    def __init__(self, receivers, project, issuer=None):
        self.receivers = receivers
        self.mail_list = [receiver.email for receiver in receivers]
        self.project = project
        self.subject = None
        self.context = {}
        self.email_text = {}
        self.issuer = issuer
        self.link = f"{settings.EMAIL_BASE_LINK}projects/{self.project.pk}"

    def send_project_updated(self):
        try:
            METHOD_NAME = self.project.status.lower()
            getattr(self, f"send_project_{METHOD_NAME}")()
        except AttributeError:
            log(
                log.WARNING,
                "Project [%s] status changed to [%s] with no email",
                self.project.name,
                self.project.status,
            )

    def send_project_created(self):
        self.subject = f"You are assigned for project {self.project.name}"
        self._conduct_email_send("project_created")

    def send_proposal_submitted(self):
        self.subject = f"Proposal submitted for project {self.project.name}"
        self._conduct_email_send("proposal_submitted")

    def send_project_approved(self):
        self.subject = f"Project {self.project.name}. Application approved."
        self._conduct_email_send("project_approved")

    def send_project_rejected(self):
        self.subject = f"Project {self.project.name}. Application rejected."
        self._conduct_email_send("project_rejected")

    def send_project_extended(self):
        self.subject = f"Project {self.project.name} extended"
        self._conduct_email_send("project_extended")

    def send_project_closed(self):
        self.subject = f"Project {self.project.name} closed"
        self._conduct_email_send("project_closed")

    def _conduct_email_send(self, template):
        self._generate_context()
        self._render_email_text(template)
        self._send_message()

    def _generate_context(self):
        self.context = {
            "redirect_link": self.link,
            "project_name": self.project.name,
            "company_name": self.project.company.name,
        }
        if self.issuer:
            self.context = {**self.context, **self.issuer.info}

    def _render_email_text(self, template):
        self.email_text["html_message"] = render_to_string(
            f"email/{template}.html", self.context
        )
        self.email_text["plaintext_message"] = render_to_string(
            f"email/{template}.txt", self.context
        )

    def _send_message(self):

        msg = EmailMultiAlternatives(
            subject=self.subject,
            body=self.email_text["plaintext_message"],
            from_email=settings.EMAIL_EMAIL_FROM,
            to=self.mail_list,
        )
        msg.attach_alternative(self.email_text["html_message"], "text/html")
        msg.send()
