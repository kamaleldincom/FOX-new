from django.urls import path, include
from . import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # path("api/back/", views.TestUserListCreate.as_view()),
    path("login/", views.login_view, name="login"),
    path("token-auth/", obtain_jwt_token),
    path("current_user/", views.current_user),
    path("protected/", views.protected),
    path("users/", views.UserList.as_view()),
    path(
        "password_reset/",
        include("django_rest_passwordreset.urls", namespace="password_reset"),
    ),
]
