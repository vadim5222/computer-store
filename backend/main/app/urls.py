from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('users/', views.AdminView.as_view(), name='users'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('profile/', views.UserProfileView.as_view(), name='profile'),
    # ======url для создания категорий
    path('category/', views.CategoryView.as_view(), name='category'),
    # ======url для создания производителей
    path('manufacturer/', views.ManufacturerView.as_view(), name='manufacturer')
]