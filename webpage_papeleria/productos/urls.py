from django.urls import path

from . import views

app_name = "productos"

urlpatterns = [

    path('index', views.index, name='index'), #url para el index de la pagina
    path('listado',views.listado,name='listado'), #url para listar todos los productos
    path('ver_producto/<int:id>',views.ver_producto,name='ver_producto'), #url para listar todos los productos
    path('pedido',views.pedido,name='pedido'),
    path('guardarPedido',views.guardarPedido,name='guardarPedido'),
    path('ver_Compras', views.verCompras, name="ver_Compras"),
]