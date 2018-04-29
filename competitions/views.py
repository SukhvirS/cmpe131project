from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateCompetiton

redirect_homepage = ''

# Create your views here.
def index(request):
    # only need 'registration/index.html' because this is
    # already in the competitions app's views file and it
    # automatically looks in the templates folder
    return render(request, 'registration/index.html')

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def create_competition(request):
    template_name = 'registration/create_competition.html'
    form = CreateCompetiton(request.POST)
    context = {
    'form': form
    }
    return render(request, template_name, context)

def competitions(request):
    template_name = 'registration/competitions.html'
    return render(request, template_name)

def profile(request):
    if not request.user.is_authenticated():
        return render(request, redirect_homepage)
    return render(request, 'registration/profile.html')
