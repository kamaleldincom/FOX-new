# from rest_framework import generics
from django.http import JsonResponse
from django.contrib.auth import authenticate, login

# from django.contrib.auth.models import User
# from .models import TestUser
from .forms import LoginForm

# from .serializers import TestUserSerializer
from django.views.decorators.csrf import ensure_csrf_cookie


# class TestUserListCreate(generics.ListCreateAPIView):
# queryset = TestUser.objects.all()
# serializer_class = TestUserSerializer


@ensure_csrf_cookie
def login_view(request, methods=["POST"]):
    if request.method == "POST":
        login_form = LoginForm(request.POST)
        try:
            assert login_form.is_valid()
            user_info = login_form.cleaned_data
            user = authenticate(
                request, username=user_info["username"], password=user_info["password"]
            )
            if user is not None:
                login(request, user)
                data = {"name": user.username}
                return JsonResponse(data=data)
            else:
                return JsonResponse(
                    {"status": "false", "message": "invalid user id"}, status=404
                )
        except AssertionError:
            return JsonResponse(
                {"status": "false", "message": "could not validate form"}, status=404
            )
    else:
        return JsonResponse(
            {"status": "false", "message": "invalid user id"}, status=405
        )
