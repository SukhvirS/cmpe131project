from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Competition

class CreateCompetiton(forms.Form):
    competition_title = forms.CharField(label = "Title", max_length = 200)

    class Meta:
        model = Competition
        fields = ['competition_title']
