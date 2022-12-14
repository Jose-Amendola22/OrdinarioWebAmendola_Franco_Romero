var orden = document.querySelector("#porden");
var ptotal = document.querySelector("#ptotal");


// funcion para agregar un producto en la venta

function AgregarProducto(id){
//obtener nombre
    productoID = '#item' + id;
    var nombre = document.querySelector(productoID).innerHTML;
    console.log(nombre)

//obtener cantidad de productos

    cantidadID = '#itemDes' + id;
    var stock = document.querySelector(cantidadID).value;
    console.log(stock);

//obtener descripcion

    descripcionID = '#itemDescrip' + id;
    var descripcion = document.querySelector(descripcionID).innerHTML;
    console.log(descripcion);
    
    
//obtener descuento
    var descuentID = '#itemD' + id;
    var descuento = document.querySelector(descuentID).value;
    console.log(descuento);

//obtener enlace de imagen
    imagenID = '#itemimg' + id;
    var imagen = document.querySelector(imagenID).innerHTML;
    console.log(imagen)

//obtener precio

    var precioID = '#itemP' + id;
    var pri = document.querySelector(precioID).value;
    console.log(pri)
   
    var precio;
    if(descuento > 0){
    precio = pri - descuento;
    console.log(precio)
    }
    else{
        precio = pri;
    }


    
    var venta = JSON.parse(localStorage.getItem('venta'));
    var total = localStorage.getItem('total');
    var tventas = venta.length;
    //guardar producto y su total en el local storage

    venta[tventas] = [nombre,precio,stock,imagen,descripcion];
    localStorage.setItem('venta', JSON.stringify(venta));

    total = Number(total) + Number(precio);
    localStorage.setItem('total',total);
    // actualizar el numero de productos en el carrito
    var carrito =  document.querySelector("#cantprod");
    carrito.innerHTML =  venta.length;
    //boton para eliminar elemento agregado
    boton = '<button class="eliminar" onclick="eliminarProducto(' + tventas +')" >Eliminar</button>'
    ptotal.innerHTML = 'Total: ' + total + ' $';
    orden.innerHTML += '<li>' + nombre + ' '  + precio + '$'+ boton +  '</li>';

    Swal.fire({
        title: 'Producto Agregado',
        icon: 'success',
        confirmButtonText: 'OK'
      })

}


function carritoCompra() {

    var venta = JSON.parse(localStorage.getItem('venta'));
    var total = localStorage.getItem('total'); 
    var tventas = venta.length;
    orden.innerHTML = '';
    for(let i=0; i<tventas; i++){
        boton = '<button class="eliminar" onclick="eliminarProducto('+i+')">Eliminar</button>'
        orden.innerHTML += '<li>' + venta[i][0] + ' ' + venta[i][1] + '$    ' + boton +'</li>';

    }
    ptotal.innerHTML = 'Total: ' + total + ' $';

}

carritoCompra();

function eliminarProducto(producto){

    var venta = JSON.parse(localStorage.getItem('venta'));
    var total = localStorage.getItem('total'); 
    total = Number(total) - Number(venta[producto][1]);
    venta.splice(producto,1);

    var carrito =  document.querySelector("#cantprod");
    carrito.innerHTML =  venta.length;

    localStorage.setItem('venta', JSON.stringify(venta));
    localStorage.setItem('total', Number(total));
    //actualizar carrito
    carritoCompra();
    
}

function mensaje2() {
    
  }