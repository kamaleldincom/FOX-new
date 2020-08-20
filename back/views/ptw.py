from back.models import Project
from django.shortcuts import render


def ptw(request, pk):
    # project = Project.objects.get(pk=pk)
    context = {}
    return render(request, "back/ptw.html", context=context)
