from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('callback/', views.auth0_callback, name='auth0_callback'),  # Auth0 callback URL
]
