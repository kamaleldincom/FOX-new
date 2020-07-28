from .models import TestUser
from .serializers import TestUserSerializer
from rest_framework import generics


class TestUserListCreate(generics.ListCreateAPIView):
    queryset = TestUser.objects.all()
    serializer_class = TestUserSerializer
