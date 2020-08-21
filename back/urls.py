from django.urls import path
from . import views

# from rest_framework_jwt.views import obtain_jwt_token
from django_rest_passwordreset.views import (
    reset_password_request_token,
    reset_password_confirm,
    reset_password_validate_token,
)

urlpatterns = [
    path("token-auth/", views.ObtainFoxJWTToken.as_view()),
    path("current_user/", views.current_user),
    path("users/", views.UserList.as_view()),
    path("dashboard/", views.Dashboard.as_view()),
    path(
        r"validate_register_token/",
        reset_password_validate_token,
        name="reset-password-validate",
    ),
    path(
        r"password_reset_confirm/",
        reset_password_confirm,
        name="reset-password-confirm",
    ),
    path(
        r"password_reset/", reset_password_request_token, name="reset-password-request"
    ),
    path("projects/", views.ProjectList.as_view()),
    path("projects/new/", views.ProjectCreate.as_view()),
    path("projects/<int:pk>/", views.ProjectDetail.as_view()),
    path("client_managers/", views.ClientManagerList.as_view()),
    path("client_managers/new", views.ClientManagerCreate.as_view()),
    path("client_managers/<int:pk>/", views.ClientManagerDetail.as_view()),
    path("contractors/", views.ContractorList.as_view()),
    path("contractors/new/", views.ContractorCreate.as_view()),
    path("contractors/<int:pk>/", views.ContractorDetail.as_view()),
    path("templates/", views.TemplateList.as_view()),
    path("templates/<int:pk>/", views.TemplateDetail.as_view()),
    path("workers/", views.WorkerList.as_view()),
    path("workers/<int:pk>/", views.WorkerDetail.as_view()),
    path("ptw/<int:pk>", views.ptw),
]
