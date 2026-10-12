from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from app.models import Users




class Review(models.Model):
    
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    text = models.TextField()
    score = models.PositiveIntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)])

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user
