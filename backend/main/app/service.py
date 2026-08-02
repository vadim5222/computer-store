from django_filters import rest_framework as filters
from .models import Product


class ProductFilter(filters.FilterSet):
    category = filters.CharFilter(field_name='category')
    price = filters.RangeFilter(field_name='price')

    class Meta:
        model = Product
        fields = ['category', 'price']