# from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model

# from back.serializers import DashboardSerializer
from back.services import get_dashboard_definition

FoxUser = get_user_model()


class Dashboard(APIView):
    """dashboard api. returns dashboard definitions based on user role.
    """

    def get(self, request):
        user = request.user
        definition = get_dashboard_definition(user.role)
        # serializer = DashboardSerializer(dashboard=definition)
        # return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(definition, status=status.HTTP_200_OK)
