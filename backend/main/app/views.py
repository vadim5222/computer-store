from django.shortcuts import render
from .seralizers import UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from django.conf import settings
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAdminUser
from .models import Users



class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            refresh.payload.update({
                'user_id':user.id,
                'username':user.username
            })
            response = Response({
                'refresh_token': str(refresh),
                'access_token':str(refresh.access_token)
            })
            response.set_cookie(
                'refresh_token',
                str(refresh),
                httponly= True,
                max_age=settings.SIMPLE_JWT.get('REFRESH_TOKEN_LIFETIME'),
                samesite='Lax'
            )
            response.set_cookie(
                'access_token',
                str(refresh.access_token),
                httponly= True,
                max_age=settings.SIMPLE_JWT.get('ACCESS_TOKEN_LIFETIME'),
                samesite='Lax'
            )
            return response
        return Response(serializer.errors)


class LoginView(APIView):
    def post(self, request):
        data = request.data
        username = data.get('username')
        password = data.get('password')
        if username is None or password is None:
            return Response({'error':'Логин и пароль обазательны'})
        user = authenticate(username = username, password=password)
        if user is None:
            return Response({'error':'Такого пользователя не существует'})
        refresh = RefreshToken.for_user(user)
        refresh.payload.update({
            'user_id':user.id,
            'username':user.username
        })
        response = Response({
            'success':'Вход выполнен успешно',
            'refresh_token':str(refresh),
            'access_token':str(refresh.access_token)
        })
        response.set_cookie(
                'refresh_token',
                str(refresh),
                httponly= True,
                max_age=settings.SIMPLE_JWT.get('REFRESH_TOKEN_LIFETIME'),
                samesite='Lax'
            )
        response.set_cookie(
                'access_token',
                str(refresh.access_token),
                httponly= True,
                max_age=settings.SIMPLE_JWT.get('ACCESS_TOKEN_LIFETIME'),
                samesite='Lax'
            )
        return response
    
class LogoutView(APIView):
    def post (self, request):
        refresh_token = request.COOKIES.get('refresh_token')
        if not refresh_token:
            return Response({'error':"Нету токена"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response ({'error':"Неверный refresh token"}, status=status.HTTP_400_BAD_REQUEST)
        response =  Response({'success':"Выход успешен"})
        response.delete_cookie('refresh_token')
        response.delete_cookie('access_token')
        return response
        
                


class AdminView(APIView):
    permission_classes = [IsAdminUser]
    def get(self, request):
        users = Users.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)