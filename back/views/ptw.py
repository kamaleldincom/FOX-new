from back.models import Project
from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_sameorigin


@xframe_options_sameorigin
def ptw(request, pk):
    project = Project.objects.get(pk=pk)
    context = {
        "company": project.company.name,
        "start_date": project.start_date,
        "contractor": project.contractor.username,
    }
    return render(request, "back/ptw.html", context=context)
