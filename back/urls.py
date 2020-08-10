from django.urls import path, include
from . import views
from rest_framework_jwt.views import obtain_jwt_token
from django_rest_passwordreset.views import (
    reset_password_request_token,
    reset_password_confirm,
    reset_password_validate_token,
)

urlpatterns = [
    # path("api/back/", views.TestUserListCreate.as_view()),
    path("login/", views.login_view, name="login"),
    path("token-auth/", obtain_jwt_token),
    path("current_user/", views.current_user),
    path("protected/", views.protected),
    path("users/", views.UserList.as_view()),
    # path(
    #     "password_reset/",
    #     include("django_rest_passwordreset.urls", namespace="password_reset"),
    # ),
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
]
