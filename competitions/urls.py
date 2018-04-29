from django.urls import path, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from competitions import views as competition_views

from . import views

#app_name = 'competitions'
urlpatterns =[
    path('',views.index, name = 'index'),
    path('login/', auth_views.login, name = 'login'),
    path('signup/', competition_views.signup, name = 'signup'),
    path('profile/', views.profile, name = 'profile'),
    path('create_competition/', views.create_competition, name='create_competition'),
    path('save_competition/', views.save_competition, name='save_competition'),
    path('competitions/', views.competitions, name ='competitions'),
    path('logout/', auth_views.logout, {'next_page': "/"}, name='logout'),
    path('admin/', admin.site.urls),
]
