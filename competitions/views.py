from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    # only need 'registration/index.html' because this is
    # already in the competitions app's views file and it
    # automatically looks in the templates folder
    return render(request, 'registration/index.html')

# this makes sure that you can only view this page once logged in
@login_required
def profile(request):
    return render(request, 'registration/profile.html')
