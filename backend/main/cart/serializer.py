from rest_framework import serializers
from catalog.serializer import ProductSerializer
from .models import CartItem

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer
    total = serializers.SerializerMethodField

    class Meta:
        model = CartItem
        fields = ['id', 'cart', 'product', 'quantity', 'price', 'total']

    def get_total(self, obj):
        return obj.price * obj.quantity