from django.db import models
from django.contrib.auth.models import AbstractUser
from catalog.models import Product


class Users(AbstractUser):
    id = models.AutoField(primary_key=True)
    phone = models.CharField(max_length = 11, blank=True, null=True,verbose_name = 'Номер телефона')
    address = models.TextField(blank=True, null=True, verbose_name='Адресс проживания') 
    def __str__(self) -> str:
        return self.username
    



class Order(models.Model):
    buyer = models.ForeignKey('Users', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.buyer} - {self.created_at}'

