# from rest_framework import generics
from django.http import JsonResponse
from django.contrib.auth import authenticate, login

from rest_framework import permissions, status, authentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

# from .models import TestUser
from back.forms import LoginForm

# from .serializers import TestUserSerializer
from django.views.decorators.csrf import ensure_csrf_cookie
from back.serializers import UserSerializer, UserSerializerWithToken

# class TestUserListCreate(generics.ListCreateAPIView):
# queryset = TestUser.objects.all()
# serializer_class = TestUserSerializer


FoxUser = get_user_model()


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


@api_view(["GET"])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(["GET"])
def protected(request):
    return Response(data={"response": "You are authenticated with JWT!!"})


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all FoxUser objects.
    """

    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = [authentication.TokenAuthentication]

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        serializer = UserSerializerWithToken(FoxUser.objects.get(pk=1))
        return Response(serializer.data, status=status.HTTP_200_OK)
