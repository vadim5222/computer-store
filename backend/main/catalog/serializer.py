from rest_framework import serializers


from .models import Category, Manufacturer, Product


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
