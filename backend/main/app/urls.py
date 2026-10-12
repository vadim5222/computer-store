from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('refresh/', views.CustomRefreshView.as_view(), name='refresh'),
    # path('users/', views.AdminView.as_view(), name='users'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('profile/', views.UserProfileView.as_view(), name='profile'),
    # ====url для обновления профиля пользователя
    path('update/<int:pk>/', views.UserProfileView.as_view(), name='update')
]


