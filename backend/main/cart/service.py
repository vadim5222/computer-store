from .models import CartItem


from django.db.models import Sum, F, Count



class CartItemService:
    @staticmethod
    def get_total_quantity(user):
        total_quantity = CartItem.objects.filter(cart__user=user).aggregate(total_quantity=Sum('quantity'))
        return total_quantity

    @staticmethod
    def get_total_price(user):
        total_price = CartItem.objects.filter(cart__user=user).aggregate(total_price = Sum(F('price') * F('quantity')))
        return total_price