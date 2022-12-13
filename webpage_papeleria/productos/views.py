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

def ver_producto(request, id):

    producto = None
    existe =  False
    estatus =  None
    try:
        producto = productos.objects.get(id=id)
        if(producto.cantidad > 0):
            estatus  =  "Stock disponible"
        else:
            estatus =  "Agotado"
        existe = True
    except:
        existe = False
    data = {
        "producto":producto,
        "existe":existe,
        "id":id,
        "estatus":estatus
    }
    return render(request,"ver_producto.html",data)
