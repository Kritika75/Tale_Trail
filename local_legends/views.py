# views.py
from django.shortcuts import render

def landingpage(request):
    return render(request, 'landingpage.html')

def index(request):
    return render(request, 'index.html')

