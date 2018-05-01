from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Competition


class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Input a valid email address.')
    last_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )

class CreateCompetiton(forms.Form):
    competition_title = forms.CharField(label = "Title", max_length = 200)
    competition_description = forms.CharField(label="Description", max_length = 1000)
    class Meta:
        model = Competition
        fields = ['competition_title', 'competition_description']

class Submission(forms.Form):
    submission = forms.FileField(label='Select a file', help_text='max. 42 megabytes')
