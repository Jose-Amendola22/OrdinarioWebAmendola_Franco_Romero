var venta = JSON.parse(localStorage.getItem('venta'));

var total = localStorage.getItem('total');

//comprobar si existe el local storage

if(venta === null || venta == undefined){
    localStorage.setItem('venta', JSON.stringify([]));
    venta = JSON.parse(localStorage.getItem('venta'))
}

if(total === null || total == undefined){
    localStorage.setItem('total', JSON.stringify());
    total = localStorage.getItem('total')
}

var carrito = document.querySelector("#cantprod");

//aqui se modifica el objeto con inner

carrito.innerHTML = venta.length;