from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from myproject.api.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    



