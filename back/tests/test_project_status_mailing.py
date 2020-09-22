from django.core import mail

# from django.urls import reverse
# from datetime import datetime
from rest_framework.test import APITestCase
from back.models import (
    Project,
    Contractor,
    FoxUser,
    Company,
    ClientAdmin,
    ClientManager,
)
from back.services import ProjectEmailNotificationService


class ProjectStatusMailingTestCase(APITestCase):
    def setUp(self):
        company = Company.objects.create(name="Test company1")
        contractor = Contractor.objects.create(
            username="test1",
            password="password",
            email="lysak.ipr@gmail.com",
            role=Contractor.Role.contractor,
            related_company="Contr 1",
        )
        Project.objects.create(
            name="Test project1",
            description="Test description",
            company=company,
            contractor=contractor,
        )
        Project.objects.create(
            name="Test project2",
            description="Test description",
            company=company,
            contractor=contractor,
            status="Rejected",
        )
        Project.objects.create(
            name="Test project3",
            description="Test description",
            company=company,
            contractor=contractor,
            status="Works_started",
        )
        ClientAdmin.objects.create(
            username="test_admin1",
            password="ZAQ!XSW@",
            email="lysak.ipr@gmail.com",
            role=FoxUser.Role.client_admin,
        )
        ClientManager.objects.create(
            username="test_man1",
            password="ZAQ!XSW@",
            email="lysak.ipr@gmail.com",
            role=ClientManager.Role.client_manager,
            position=ClientManager.Position.safety_manager,
        )

    def test_project_created_mail(self):
        project = Project.objects.get(name="Test project1")
        contractor = Contractor.objects.get(username="test1")
        email_service = ProjectEmailNotificationService(
            project=project, receivers=[contractor]
        )
        email_service.send_project_updated()
        self.assertEqual(
            mail.outbox[-1].subject, "You are assigned for project Test project1"
        )

    def test_project_rejected(self):
        project = Project.objects.get(name="Test project2")
        # contractor = Contractor.objects.get(username="test1")
        manager = ClientManager.objects.get(username="test_man1")
        email_service = ProjectEmailNotificationService(
            project=project, receivers=[project.contractor], issuer=manager
        )
        email_service.send_project_updated()
        self.assertEqual(
            mail.outbox[-1].subject, "Project Test project2. Application rejected."
        )

    def test_project_approved(self):
        project = Project.objects.get(name="Test project2")
        manager = ClientManager.objects.get(username="test_man1")
        email_service = ProjectEmailNotificationService(
            project=project, receivers=[project.contractor], issuer=manager
        )
        email_service.send_project_updated()
        self.assertEqual(
            mail.outbox[-1].subject, "Project Test project2. Application rejected."
        )
