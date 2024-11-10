from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views
from .views import StoryViewSet

router = DefaultRouter()
router.register(r'stories', StoryViewSet) #The r'stories' part sets the URL prefix for this viewset. This means that all routes for StoryViewSet will start with /stories/

urlpatterns = [
    path('', include(router.urls)),
    path('<int:id>', views.story_details, name='story-details'),
    path('submit/', views.submit_story, name='submit_story'),  # Matches {% url 'submit_story' 
    path('<int:id>/add_comment/', views.add_comment, name = 'add_comment'),
    path('api/stories/', views.get_stories, name='get_stories')
]

