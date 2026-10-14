from rest_framework import serializers
from .models import Cart, CartItem
from catalog.serializer import ProductSerializer



class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):

    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ['cart', 'product', 'quantity', 'price']