from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateCompetiton, SignUpForm
from .models import Competition

redirect_homepage = ''

# Create your views here.
def index(request):
    # only need 'registration/index.html' because this is
    # already in the competitions app's views file and it
    # automatically looks in the templates folder
    return render(request, 'registration/index.html')

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('index')
    else:
        form = SignUpForm()
    return render(request, 'registration/signup.html', {'form': form})

def create_competition(request):
    template_name = 'registration/create_competition.html'
    if request.method == 'GET':
        form = CreateCompetiton(request.POST)
    else:
        if form.is_valid():
            title = form.cleaned_data['competition_title']

    form = CreateCompetiton(request.POST)
    context = {
    'form': form
    }
    return render(request, template_name, context)

def save_competition(request):
    template_name = 'registration/save_competition.html'
    comp_title = request.POST.get('competition_title')
    comp_desc = request.POST.get('competition_description')
    comp_deadline = request.POST.get('deadline')
    comp = Competition()   #creates new competition object
    comp.competition_title = comp_title     #sets competition title to the one gotten from the form
    comp.competition_description = comp_desc
    comp.deadline = comp_deadline
    comp.save()         #saves competition object to model (database)
    context = {
        'comp': comp
    }
    return render(request, template_name, context)

def competitions(request):
    template_name = 'registration/competitions.html'
    competitions = Competition.objects.all()
    context = {
        'competitions': competitions
    }
    return render(request, template_name, context)

def competition_page(request, comp_id):
    template_name = 'registration/competition_page.html'
    competition = Competition.objects.get(id=comp_id)
    context = {
        'competition': competition
    }
    return render(request, template_name, context)

#def submit_file(request, comp_id):
     # Handle file upload
#    if request.method == 'POST':
#        form = Submission(request.POST, request.FILES)
#        if form.is_valid():
#            new_submission = Submission( = request.FILES['submission'])
#            new_submission.user_id = User.objects.get(id=user_id)
#            new_submission.comp_id = Competition.objects.get(id=comp_id)
#            new_submission.save()
#
            # Redirect to the document list after POST
#            return HttpResponseRedirect(reverse('myapp.views.list'))
#    else:
#        form = Submission() # A empty, unbound form
#
#    # Render list page with the documents and the form
#    return render_to_response(
#        'myapp/list.html',
#        {'documents': documents, 'form': form},
#        context_instance=RequestContext(request)
#    )
