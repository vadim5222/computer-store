from .seralizers import UserSerializer, CategorySerializer, ManufacturerSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from django.conf import settings
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from .models import Users, Category, Manufacturer
from rest_framework.parsers import MultiPartParser, FormParser


# =====================логика регистрации и авторизации и выхода
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
                key = 'refresh_token',
                value=str(refresh),
                secure=False,
                httponly= True,
                samesite='Lax',
                max_age=settings.SIMPLE_JWT.get('REFRESH_TOKEN_LIFETIME'),
            )
            response.set_cookie(
                key = 'access_token',
                value = str(refresh.access_token),
                secure=False,
                httponly= True,
                samesite='Lax',
                max_age=settings.SIMPLE_JWT.get('ACCESS_TOKEN_LIFETIME')
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
            return Response({'error':'Такого пользователя не существует'}, status=status.HTTP_404_NOT_FOUND)
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
                key = 'refresh_token',
                value = str(refresh),
                secure=False,
                httponly= True,
                samesite='Lax',
                max_age=settings.SIMPLE_JWT.get('REFRESH_TOKEN_LIFETIME'),
                path='/'
            )
        response.set_cookie(
                key = 'access_token',
                value = str(refresh.access_token),
                secure=False,
                httponly= True,
                samesite='Lax',
                max_age=settings.SIMPLE_JWT.get('ACCESS_TOKEN_LIFETIME'),
                path='/'
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
        

# логика для профиля пользователя
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data':serializer.data})
        

# логика для админки
class AdminView(APIView):
    permission_classes = [IsAdminUser]
    def get(self, request):
        users = Users.objects.all()
        categories = Category.objects.all()
        manufacturers = Manufacturer.objects.all()
        serializer_users = UserSerializer(users, many=True)
        serializer_categories = CategorySerializer(categories, many=True)
        serializer_manufacturers = ManufacturerSerializer(manufacturers, many=True)
        return Response(serializer_users.data, serializer_categories.data, serializer_manufacturers.data)
    
# логика для создания категории продукта
class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response({'data':serializer.data})
    def post(self, request):
        serializer = CategorySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors})
    

# логина создания производителей 
class ManufacturerView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def get(self, request):
        manufacturers = Manufacturer.objects.all()
        serializer = ManufacturerSerializer(manufacturers, many=True)
        return Response({'data':serializer.data})
    def post(self, request):
        serializer = ManufacturerSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data":serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)