from rest_framework import serializers
from .models import Users, Category, Manufacturer, Product, Review


class UserSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only = True)
    password2 = serializers.CharField(write_only = True)
    class Meta:
        model = Users
        fields = ['id','first_name', 'last_name', 'username', 'email', 'phone', 'address', 'password1', 'password2']

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError('Passwords do not match')
        return attrs
    
    def create(self, validated_data):
        user = Users(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            username = validated_data['username'],
            email = validated_data['email'],
            phone = validated_data['phone'],
            address = validated_data['address'],
        )
        user.set_password(validated_data['password1'])
        user.save()
        return user


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['first_name', 'last_name', 'username', 'email', 'phone', 'address']
    
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


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['user', 'text', 'score', 'created_at']
    