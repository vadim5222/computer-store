from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('refresh/', views.CustomRefreshView.as_view(), name='refresh'),
    path('users/', views.AdminView.as_view(), name='users'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('profile/', views.UserProfileView.as_view(), name='profile'),
    # ======url для создания категорий
    path('category/', views.CategoryView.as_view(), name='category'),
    # ======url для создания производителей
    path('manufacturer/', views.ManufacturerView.as_view(), name='manufacturer'),
    # ====url для управлением продуктами
    path('products/', views.ProductList.as_view(), name='products'),
    # ====utl для обновления профиля пользователя
    path('update/<int:pk>/', views.UserProfileView.as_view(), name='update')
]


