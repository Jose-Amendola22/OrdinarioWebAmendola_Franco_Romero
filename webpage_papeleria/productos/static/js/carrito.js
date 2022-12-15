var nombre = document.querySelector("#nombre")
var precio = document.querySelector("#precio")
var tot = document.querySelector("#total")
var totProd = document.querySelector("#cantProd")
var remove = document.querySelector("#delete")
var cont = 0

function carritoCompra() {

    var venta = JSON.parse(localStorage.getItem('venta'));
    var total = localStorage.getItem('total'); 
    var tventas = venta.length;

    nombre.innerHTML = '<h3>Nombre</h3>';
    precio.innerHTML = '<h3>Precio</h3>';
    remove.innerHTML = '<h3>Eliminar</h3>';


    
    for(let i=0; i<tventas; i++){
        cont ++;
        remove.innerHTML += '<br><button class="btn btn-danger" onclick="DeleteItem('+i+')" >x</button>'
        nombre.innerHTML += '<br><input name="nombre" disabled placeholder='+ venta[i][0]+' value='+ venta[i][0]+'></input>'
        precio.innerHTML += '<br><input name="precio" disabled placeholder='+ venta[i][1]+ '$'+' value='+ venta[i][1]+'></input>'
       
    }
    totProd.innerHTML= 'Canidad de productos ' + cont
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
    cont --;
    carritoCompra();
}

function pedido() {
    var venta = localStorage.getItem('venta');
    var total = localStorage.getItem('total');
 
 
    var orderdata = {};
    

    orderdata['venta'] = venta;
    
    //orderdata['test'] = dd;
    console.log(orderdata)
    console.log(totalt)
    $.ajax({
        url:'pedido',
        type:"POST",
        data: orderdata, totalt,
        success: function(data){
            console.log("sexo");
        }
    })
}