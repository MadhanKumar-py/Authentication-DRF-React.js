from django.shortcuts import render
from .serilaizers import RegisterSerializer
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=RegisterSerializer
    permission_classes=[AllowAny]

class Protected_view(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        response={
            'status':'Request was permitted'
        }
        return Response(response)
     