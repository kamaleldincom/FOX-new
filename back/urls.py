from django.urls import path
from . import views

urlpatterns = [
    path("api/back/", views.TestUserListCreate.as_view()),
    path("api/login", views.login_view, name="login"),
]
