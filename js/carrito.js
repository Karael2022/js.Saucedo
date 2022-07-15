/*let carrito;
if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

const body = document.getElementById('carrito');
if(carrito.length == 0){
    const texto = `
    <div class='cartContainer'>
        <h1 class='txtCarrito'>No hay productos en el carrito</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;    
body.innerHTML += texto;
} else {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
    body.innerHTML += titulo;
    const table = `
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>PRODUCTOS</th>
                        <th class='txtTabla'>CANTIDAD</th>
                        <th class='txtTabla'>PRECIO</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div class='btn-container'>
                <button class='btnTerminar'>TERMINAR COMPRA</button>
            </div>`;
            body.innerHTML += table
            const tbody = document.getElementById('tbody')
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                const { id, nombre, img, precio, cantidad } = element;
                const cart = `
                <tr id=${id}>
                    <th><button class ="btnEliminar"><img class='trash' src='./imagenes/trash-can.png' alt='foto de borrar'>Eliminar</button></th>
                    <th class='detallesTabla'><img class='imgProdCart' src=${img} alt='foto del producto'><span class='nombreProd'>${nombre}</span></th>
                    <th>${cantidad}</th>
                    <th>$${(cantidad * precio).toLocaleString()}</th>
                </tr>`
                tbody.innerHTML += cart
            }
}*/


let carrito;
if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
}



//Busco x Id
const buscarIdProducto = (id) => {
    const idBuscado = carrito.find((idBuscado) => Number(idBuscado.id) === id);
  
    return (resultadoBusqueda = idBuscado);
  };
  

//funcion para eliminar items 
const eliminarProducto = (id) => {
    const productoPorEliminar = buscarIdProducto(id);
    const indice = carrito.indexOf(productoPorEliminar);
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  };

const body = document.getElementById('carrito');
if(carrito.length == 0){
    const texto = `
    <div class='cartContainer'>
        <h1 class='txtCarrito'>No hay productos en el carrito</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;    
body.innerHTML += texto;
} else 
    {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
body.innerHTML += titulo;
    const table = `
    <div class="container">
    <button class="btn text-center btn-danger vaciando" id="vaciarCarrito">Vaciar Carrito</button>
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>PRODUCTOS</th>
                        <th class='txtTabla'>CANTIDAD</th>
                        <th class='txtTabla'>PRECIO</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div class='btn-container'>
            <div class='container mb-3 text-center'>
                <a href="index.html"> <button class='btn btn-primary btn-sm me-2'>Seguir comprando</button></a>
                <button class=' btn btn-primary btn-sm me-2' id="terminarCompra">Terminar Compra</button>
                
            </div>`;
            body.innerHTML += table
            const tbody = document.getElementById('tbody')
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                const { id, nombre, img, precio, cantidad } = element;
                const cart = `
                    <tr id=${id}>
                    <th><button class ="btnEliminar" id="eliminarItem" onclick="eliminarProducto(${id})" ><img class='trash' src='./imagenes/trash-can.png' alt='foto de borrar'>Eliminar</button></th>   
                    <th class='detallesTabla'><img class='imgProdCart' src=${img} alt='foto del producto'><span class='nombreProd'>${nombre}</span></th>
                    <th>${cantidad}</th>
                    <th>$${(cantidad * precio).toLocaleString()}</th>
                </tr>`;
                tbody.innerHTML += cart;
            }
}
    
  const eliminarItem = document.getElementById("eliminarItem");

  deleteCart = document.getElementById("vaciarCarrito");

  deleteCart.onclick = () => {
    carrito = [];
    //vaciar localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    body.innerHTML = ``;
    body.innerHTML += texto;
  };

  //Finalizo la compra// 
  finalizarCompra = document.getElementById('terminarCompra');
  finalizarCompra.onclick = () => {
    Swal.fire({
      icon: "success",
      title: "Gracias por tu compra",
    });
  };
