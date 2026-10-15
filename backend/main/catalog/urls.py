from django.urls import path
from . import views


urlpatterns = [
    path('category/', views.CategoryView.as_view(), name='category'),
    path('manufacturer/', views.ManufacturerView.as_view(), name='manufacturer'),
    path('products/', views.ProductListCreateAPIView.as_view(), name='products'),
]
