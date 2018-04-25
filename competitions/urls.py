from django.urls import path, include
from django.contrib import admin
from django.contrib.auth import views as auth_views

from . import views

#app_name = 'competitions'
urlpatterns =[
    path('',views.index, name = 'index'),
    #path('accounts/', include('django.contrib.auth.urls')),
    path('login/', auth_views.login, name = 'login'),

    path('profile/', views.profile, name = 'profile'),
    
    path('logout/', auth_views.logout, {'next_page': "/"}, name='logout'),
    path('admin/', admin.site.urls),
]
