from django.contrib import admin
from .models import Users, Product, Category, Manufacturer, Order, Review


admin.site.register(Users)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Manufacturer)
admin.site.register(Order)
admin.site.register(Review)