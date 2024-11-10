from django.shortcuts import render, redirect
from rest_framework import viewsets
from .models import Story, Comment
from .serializers import StorySerializer
from rest_framework.permissions import AllowAny
from django.views.decorators.http import require_POST
from django.utils import timezone
from django.http import JsonResponse

# Create your views here.
class StoryViewSet(viewsets.ModelViewSet):
  queryset = Story.objects.all() #This defines the data that the view will work with. Here, it retrieves all records from the Story model. When someone makes a request to this API, this queryset determines which stories are accessible.
  serializer_class = StorySerializer #This tells the viewset to use StorySerializer to handle data conversion. The serializer will convert Story instances into JSON format for API responses and handle incoming JSON data to create or update Story instances in the database.
  permission_classes = [AllowAny] #Allow any user to access the API

def submit_story(request):
    return render(request, 'story_sub.html')

def story_details(request, id):
   story = Story.objects.get(id = id)
   comments = Story.objects.all().order_by('-date')
   context = {
      'story': story,
      'comments': comments
   }
   return render(request, 'story_deets.html',  context)

def get_stories(request):
    stories = Story.objects.all()
    stories_data = [
        {
            "title": story.title,
            "content": story.content,
            "latitude": float(story.latitude),
            "longitude": float(story.longitude),
        }
        for story in stories
    ]
    return JsonResponse(stories_data, safe=False)
 
@require_POST
def add_comment(request, id):
  story = Story.objects.get(id = id)
  content = request.POST.get('content')
  if content:
     Comment.objects.create(story=story, content=content, created_at=timezone.now())
  return redirect('story_details', id=story.id)
