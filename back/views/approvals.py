from django.db.models import F
from rest_framework import generics
from back.models import Approval, Project, ClientManager, Activity
from back.serializers import ApprovalSerializer, ApprovalListSerializer
from back.services import ProjectEmailNotificationService as mail_service


class ApprovalList(generics.ListAPIView):
    serializer_class = ApprovalListSerializer

    def get_queryset(self):
        user = self.request.user

        return Approval.objects.filter(manager=user, status=Approval.Status.pending)


class ApprovalDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ApprovalSerializer

    def get_queryset(self):
        user = self.request.user
        return Approval.objects.filter(manager=user, status=Approval.Status.pending)

    def patch(self, request, *args, **kwargs):
        res = super(ApprovalDetail, self).patch(request, args, kwargs)
        project_id = request.data.get("project", None)
        project = Project.objects.get(pk=project_id)
        approval_status = res.data["status"]
        comment = res.data["description"]
        mail = mail_service(
            project=project,
            receivers=[project.contractor],
            issuer=request.user.clientmanager,
        )
        approval_activity = Activity(
            project=project, author=request.user, company=request.user.company
        )
        approval_activity.approval_result_message(approval_status, comment)
        managers = ClientManager.objects.filter(company=project.company)
        last_approvals = []
        for manager in managers:
            last_approve = (
                manager.approvals.filter(project=project)
                .order_by(F("pk").desc())
                .first()
            )
            last_approvals += [last_approve]
        last_approvals = [a for a in last_approvals if a is not None]
        if Approval.Status.rejected in [a.status for a in last_approvals]:
            project.status = Project.Status.rejected
            project.save()
            resolution_activity = Activity(
                project=project, author=request.user, company=request.user.company
            )
            resolution_activity.project_submition_rejected_message()
            # mail = mail_service(
            #     project=project,
            #     receivers=[project.contractor],
            #     issuer=request.user.clientmanager,
            # )
            mail.send_project_updated()
            for approval in last_approvals:
                if approval.status == Approval.Status.pending:
                    approval.status = Approval.Status.auto_rejected
                    approval.save()
        elif [a.status for a in last_approvals].count(Approval.Status.approved) == len(
            last_approvals
        ):
            project.status = Project.Status.approved
            project.save()
            resolution_activity = Activity(
                project=project, author=request.user, company=request.user.company
            )
            resolution_activity.project_submition_accepted_message()
            # mail = mail_service(project=project, receivers=[project.contractor])
            mail.send_project_updated()
        return res
