from django.shortcuts import render
from .serializer import CartSerializer, CartItemSerializer
from rest_framework.views import APIView
from .models import Cart, CartItem
from rest_framework.response import Response


class CartAPIView(APIView):
    def get(self, request):
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response({'data':serializer.data})


class CartItemAPIView(APIView):
    def get(self, request):
        user = request.user
        carts = CartItem.objects.filter(cart__user=user)
        total_quantity = 0
        total_price = 0
        for cart in carts:
            total_quantity += cart.quantity
            total_price += cart.price * cart.quantity
        return Response({
            'total_quantity': total_quantity,
            'total_price': total_price
        })