from back.models import Project
from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_sameorigin


@xframe_options_sameorigin
def ptw(request, pk):
    project = Project.objects.get(pk=pk)
    workers = [
        {"name": worker.name, "identification_number": worker.card_number_id}
        for worker in project.workers.all()
    ]
    submitted = not project.status == Project.Status.created
    context = {
        "company": project.company.name,
        "start_date": project.start_date.date(),
        "start_time": project.start_date.time(),
        "end_date": project.end_date.date(),
        "end_time": project.end_date.time(),
        "description": project.description,
        "work_at_height": project.work_at_height,
        "lifting_work": project.lifting_work,
        "confined_space": project.confined_space,
        "hot_work": project.hot_work,
        "chemical_handling": project.chemical_handling,
        "work_alone": project.work_alone,
        "work_at_sensitive_area": project.work_at_sensitive_area,
        "cold_work": project.cold_work,
        "contractor": project.contractor.username,
        "contractor_company": project.contractor.related_company,
        "workers": workers,
        "responsible_person": project.responsible_person.name
        if project.responsible_person
        else "",
        "submitted": submitted,
    }
    return render(request, "back/ptw.html", context=context)
