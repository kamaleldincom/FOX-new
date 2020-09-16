from django.urls import reverse
from datetime import datetime, date, time
from rest_framework.test import APITestCase

# from django.test import TestCase
from back.models import (
    Project,
    Contractor,
    FoxUser,
    Company,
    Activity,
    ClientAdmin,
    ClientManager,
)


class ActivityTestCase(APITestCase):
    def setUp(self):
        Project.objects.create(
            name="Test project1",
            description="Test description",
        )
        Contractor.objects.create(
            username="test1",
            password="password",
            email="lysak.ipr@gmail.com",
            role=Contractor.Role.contractor,
            related_company="Contr 1",
        )
        ClientAdmin.objects.create(
            username="test_admin1",
            password="ZAQ!XSW@",
            email="lysak.ipr@gmail.com",
            role=Contractor.Role.client_admin,
        )

        Company.objects.create(name="Test company1")

    def test_activities_proposal_submition_message(self):
        project = Project.objects.get(name="Test project1")
        user = FoxUser.objects.get(username="test1")
        company = Company.objects.get(name="Test company1")
        activity = Activity(project=project, author=user, company=company)
        activity.proposal_submition_message()
        self.assertEqual(
            activity.message,
            f'[{datetime.now().strftime("%m/%d/%Y, %H:%M")}] Submitted proposal by contractor Contr 1',
        )

    def test_activities_project_created_message(self):
        project = Project.objects.get(name="Test project1")
        user = FoxUser.objects.get(username="test_admin1")
        company = Company.objects.get(name="Test company1")
        activity = Activity(project=project, author=user, company=company)
        activity.project_created_message()
        self.assertEqual(
            activity.message,
            f'[{datetime.now().strftime("%m/%d/%Y, %H:%M")}] Project created by admin test_admin1',
        )

    def test_activities_project_approved_message(self):
        pass

    def test_activities_project_rejected_message(self):
        pass

    def test_activities_works_status_update_message(self):
        pass

    def test_activities_approval_confirmed_message(self):
        pass

    def test_activities_approval_rejected_message(self):
        pass

    def test_project_creation_activity(self):
        res = self.login({"username": "test_admin1", "password": "ZAQ!XSW@"})
        self.assertIsNotNone(res)

    def login(self, data):
        url = reverse("login")
        response = self.client.post(url, data)
        return response
