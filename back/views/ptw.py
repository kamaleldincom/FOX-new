from back.models import Project
from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_sameorigin


@xframe_options_sameorigin
def ptw(request, pk):
    project = Project.objects.get(pk=pk)
    context = {
        "company": project.company.name,
        "start_date": project.start_date,
        "start_time": project.start_time,
        "end_date": project.end_date,
        "end_time": project.end_time,
        "contractor": project.contractor.username,
    }
    return render(request, "back/ptw.html", context=context)
