from .models import Cart


class CartService:
    def __init__(self, cart):
        self.cart = cart

    def get_cart(sefl, request):
        user = request.user
        if user and user.is_authenticated:
            cart, _ = Cart.objects.get_or_create(user = user)
            return cart
        return None

    