from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.landingpage, name='landingpage'),         # Matches {% url 'landingpage' %}
    path('stories/', include('stories.urls')),  # Include your 'stories' app URLs
    path('explore/', views.index, name='index'),       # Matches {% url 'index' %}
    path('users/', include(('users.urls', 'users'), namespace='users')),
]

#serve media files during development
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
