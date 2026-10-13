from django.urls import path
from . import views


urlpatterns = [
    path('category/', views.CategoryView.as_view(), name='category'),
    path('manufacturer/', views.ManufacturerView.as_view(), name='manufacturer'),
    path('products/', views.ProductList.as_view(), name='products'),
    path('products-create/', views.ProductCreateAPIView.as_view(), name='product-create')
]
