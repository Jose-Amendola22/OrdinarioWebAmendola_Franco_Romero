var nombre = document.querySelector("#nombre")
var precio = document.querySelector("#precio")
var tot = document.querySelector("#total")
var totProd = document.querySelector("#cantProd")
var remove = document.querySelector("#delete")

function carritoCompra() {

    var venta = JSON.parse(localStorage.getItem('venta'));
    var total = localStorage.getItem('total'); 
    var tventas = venta.length;

    nombre.innerHTML = '<h3>Nombre</h3>';
    precio.innerHTML = '<h3>Precio</h3>';
    remove.innerHTML = '<h3>Eliminar</h3>';


    
    for(let i=0; i<tventas; i++){
        remove.innerHTML += '<br><h4><button class="btn btn-danger" onclick="DeleteItem('+i+')" >x</button></h4>'
        nombre.innerHTML += '<br><h4>'+ venta[i][0]+'</h4>'
        precio.innerHTML += '<br><h4>'+ venta[i][1]+ '$'+'</h4>'
       
    }
    tot.innerHTML = 'Total: ' + total + ' $';

}
carritoCompra();


function DeleteItem(producto){

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