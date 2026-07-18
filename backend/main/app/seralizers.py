from rest_framework import serializers
from .models import Users, Category, Manufacturer, Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
    def create(self, validated_data):
        user = Users(
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title', 'created_at']


class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufacturer
        fields = ['title', 'description', 'image', 'created_at']

    
class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        queryset = Category.objects.all(),
        slug_field = 'title'
    )
    manufacturer = serializers.SlugRelatedField(
        queryset = Manufacturer.objects.all(),
        slug_field = 'title'
    )
    class Meta:
        model = Product
        fields = ['title', 'full_description', 'short_description', 'image' ,'category', 'manufacturer', 'price', 'created_at']
    