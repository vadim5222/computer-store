from django.shortcuts import render
from .serializer import ReviewSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from rest_framework.views import APIView



class ReviewAPIView(APIView):
    def post(self, request):
        serializer = ReviewSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response({'data':serializer.data}, status=status.HTTP_200_OK)