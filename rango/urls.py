
from django.urls import path
from rango import views

app_name = 'rango'

urlpatterns = [
    path('', views.index, name='index'),
    path('areachart/', views.areachart, name='areachart'),
    path('donutchart/', views.donutchart, name='donutchart'),
    path('barchart/', views.barchart, name='barchart'),
    path('mixedchart/', views.mixedchart, name='mixedchart'),
    path('table/', views.table, name='table'),
    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
]
