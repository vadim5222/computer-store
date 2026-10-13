from django.shortcuts import render
from .serializer import CartSerializer, CartItemSerializer
from rest_framework.views import APIView
from .models import Cart, CartItem
from rest_framework.response import Response
from .service import CartItemService


class CartAPIView(APIView):
    def get(self, request):
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response({'data':serializer.data})


class CartItemAPIView(APIView):
    def get(self, request):
        cart = CartItem.objects.filter(cart__user=request.user)
        serializer = CartItemSerializer(cart, many=True)
        total_quantity = CartItemService.get_total_quantity(user=request.user)
        total_price = CartItemService.get_total_price(user=request.user)
        return Response({'data': serializer.data, 'total_quantity': total_quantity, 'total_price': total_price})

        