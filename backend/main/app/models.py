from django.db import models
from django.contrib.auth.models import AbstractUser
from catalog.models import Product


class Users(AbstractUser):
    id = models.AutoField(primary_key=True)
    phone = models.CharField(max_length = 11, blank=True, null=True,verbose_name = 'Номер телефона')
    address = models.TextField(blank=True, null=True, verbose_name='Адресс проживания') 
    def __str__(self) -> str:
        return self.username
    




