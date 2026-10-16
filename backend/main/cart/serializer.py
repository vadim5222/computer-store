from rest_framework import serializers
from .models import Cart, CartItem
from catalog.serializer import ProductSerializer
from catalog.models import Product


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemCreateSerializer(serializers.ModelSerializer):

    product = serializers.SlugRelatedField(
        queryset = Product.objects.all(),
        slug_field = 'title'
    )

    cart = serializers.SlugRelatedField(
        queryset = Cart.objects.all(),
        slug_field = 'user__username'
    )

    class Meta:
        model = CartItem
        fields = ['cart', 'product' ,'quantity', 'price']


    def create(self, validated_data):
        cart = validated_data['cart']
        product = validated_data['product']
        quantity = validated_data['quantity']
        price = validated_data['price']

        cartitem, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={'quantity':quantity, 'price': price}
        )

        if not created:
            cartitem.quantity += quantity
            cartitem.price = price
            cartitem.save()
        return cartitem



class CartItemListSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ['id', 'cart', 'product' ,'quantity', 'price']
