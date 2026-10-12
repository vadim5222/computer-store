from django.urls import path
from . import views

urlpatterns = [
    path('cart/', views.CartAPIView.as_view(), name='cart'),
    path('cart-item/', views.CartItemAPIView.as_view(), name='cart-item')
]
