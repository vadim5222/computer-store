from django.core.cache import cache
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Manufacturer, Product
from .serializer import CategorySerializer, ManufacturerSerializer, ProductSerializer
from .service import ProductFilter


class ManufacturerView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        manufacturers = Manufacturer.objects.all()
        serializer = ManufacturerSerializer(manufacturers, many=True)
        return Response({"data": serializer.data})

    def post(self, request):
        serializer = ManufacturerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(
            {"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )


class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response({"data": serializer.data})

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors})


# =====================================ЛОГИКА РАБОТЫ С ПРОДУКТАМИ
class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter

    def list(self, request, *args, **kwargs):
        cache_key = f"catalog_{request.get_full_path()}"
        data = cache.get(cache_key)
        if data is None:
            response = super().list(request, *args, **kwargs)
            data = response.data
            cache.set(cache_key, data, timeout=600)
        response = Response(data)
        return response
