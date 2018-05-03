from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Competition
from django.forms import ModelForm


class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Input a valid email address.')
    last_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2')

class CreateCompetiton(ModelForm):
    competition_title = forms.CharField(label = "Title", max_length = 200)
    competition_description = forms.CharField(label="Description", max_length = 1000)
    deadline = forms.CharField(label="Deadline", max_length = 10)
    class Meta:
        model = Competition
        fields = ['competition_title', 'competition_description', 'deadline']

#class Submission(forms.Form):
#    submission = forms.FileField(label='Select a file', help_text='max. 42 megabytes')
