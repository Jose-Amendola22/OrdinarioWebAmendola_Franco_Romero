from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from productos.models import *
from django.shortcuts import redirect
from ventas.models import *
from django.views.decorators.csrf import csrf_exempt
from tkinter import * 
from tkinter import messagebox as MessageBox
import ast
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

def guardarPedido(request):
   
    nombre = request.POST.get("nombre")
    precio = request.POST.get("precio")

    insertVenta = ventas.objects.create(nombre = "nddd", precio_unitario = 1, descripcion = "sadsdas", precio_total = 33, cantidad_total = 0 )

    return render(request,"venta.html")
    
@csrf_exempt
#lo que hacemos aqui es hacer una peticion por ajax para mandar el data del carrito que esta en el local storage
def pedido(request): 
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        venta = request.POST.get('venta')
        ventaA = ast.literal_eval(venta) #Esta función recibe un string ex: "[["hola"]]" y lo transforma en una lista de lista ex: [[hola]]
        productosDB  =  productos.objects.all()
        for i in range(len(ventaA)):
            for x in productosDB:
                if(ventaA[i][0] == x.nombre):
                    if (x.cantidad-1 < 0):
                        MessageBox.showinfo("No hay stock!")
                    else:
                        productosID = productos.objects.get(id=x.id)
                        productosID.cantidad = productosID.cantidad -  1
                        insertVenta = ventas.objects.create(nombre = ventaA[i][0], costo= ventaA[i][1])
                        productosID.save()
        
    return render (request,"venta.html")

#Función para ver comprar
def verCompras(request):
    ventasDB  =  ventas.objects.all()
    datos = {
        
        "ventasDB": ventasDB  
    }
    return render(request,"ver_Compras.html",datos)




