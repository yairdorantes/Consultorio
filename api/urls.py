from django.urls import path
from .views import Login
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("login",csrf_exempt(Login.as_view()),name="musicians"),
    
]