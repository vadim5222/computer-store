from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=255)
    full_description = models.TextField(verbose_name='full_descruption')
    short_description = models.TextField(verbose_name='short_description')
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    manufacturer = models.ForeignKey('Manufacturer', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='price')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title



class Manufacturer(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='manufacturer/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title