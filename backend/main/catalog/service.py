from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):

    price = filters.RangeFilter()
    category = filters.CharFilter()
    manufacturer = filters.CharFilter()

    class Meta:
        model = Product
        fields = ['price', 'category', 'manufacturer']