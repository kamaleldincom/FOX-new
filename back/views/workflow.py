from django.http import JsonResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.views import APIView
from rest_framework import status
from back.models import Project, Approval, ClientManager
from back.logger import log


class ProposalSubmit(APIView):
    def patch(self, request, pk, format=None):
        # get current project
        project = get_object_or_404(Project, pk=pk)
        # project=Project.objects.get(pk=pk)

        # get companies managers
        managers = get_list_or_404(ClientManager, company=request.user.company)
        # managers = request.user.company.fox_users.filter(role="CliMan")

        # create approval for each manager
        for manager in managers:
            log(
                log.DEBUG,
                "Assigned approval for project %d to manager %d",
                project.pk,
                manager.pk,
            )
            Approval.objects.create(manager=manager, project=project)

        # update current project status
        project.status = Project.Status.submitted
        project.save()

        # return response
        return JsonResponse(
            {"success": "Application has been submitted"},
            status=status.HTTP_201_CREATED,
        )
