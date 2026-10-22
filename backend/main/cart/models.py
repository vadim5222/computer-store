from django.db import models


from app.models import Users
from catalog.models import Product

class Cart(models.Model):
    user = models.OneToOneField(Users, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.user.username

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return f'{self.cart.user}'