from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator


class Users(AbstractUser):
    id = models.AutoField(primary_key=True)
    phone = models.CharField(max_length = 11, blank=True, null=True,verbose_name = 'Номер телефона')
    address = models.TextField(blank=True, null=True, verbose_name='Адресс проживания') 
    def __str__(self):
        return self.username
    

class Category(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Manufacturer(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='manufacturer/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Product(models.Model):
    title = models.CharField(max_length=255)
    full_description = models.TextField(verbose_name='full_descruption')
    short_description = models.TextField(verbose_name='short_description')
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    manufacturer = models.ForeignKey('Manufacturer', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='price')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Order(models.Model):
    buyer = models.ForeignKey('Users', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user - self.created_at}'


class Review(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    text = models.TextField()
    score = models.PositiveIntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user
