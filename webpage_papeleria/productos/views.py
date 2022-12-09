from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from productos.models import *
from django.shortcuts import redirect
# Create your views here.

def index(request):
    return render(request, 'index.html')


def listado(request):
    productosDB  =  productos.objects.all()
    datos = {
        
        "productosDB": productosDB  
    }

    return render(request,"listado.html",datos)
