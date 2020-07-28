from django.urls import path
from . import views

urlpatterns = [
    path("api/back/", views.TestUserListCreate.as_view()),
]
