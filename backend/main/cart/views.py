from django.shortcuts import render
from .serializer import CartItemListSerializer, CartItemCreateSerializer, CartSerializer
from rest_framework.views import APIView
from .models import Cart, CartItem
from rest_framework.response import Response
from .service import CartItemService
from rest_framework import status


class CartAPIView(APIView):
    def get(self, request):
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response({'data':serializer.data})


class CartItemAPIView(APIView):
    def get(self, request):
        cart = CartItem.objects.filter(cart__user=request.user)
        total_quantity = CartItemService.get_total_quantity(user=request.user)
        total_price = CartItemService.get_total_price(user=request.user)
        serializer = CartItemListSerializer(cart, many=True)
        return Response({'data':serializer.data, 'total_quantity': total_quantity, 'total_price': total_price})

    def post(self, request):
        serializer = CartItemCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)