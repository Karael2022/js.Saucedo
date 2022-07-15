

if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {

    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const { id, nombre, precio, img } = element
        const card = `
        <div class='card'>
            <p>${nombre}</p>
            <div>
                <img class='imgProducto' src=${img} alt=''/>
            </div>
            <div>
                <p>$${precio.toLocaleString()}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>Comprar</button>
            </div>
        </div>
        `;
        const container = document.getElementById('container')
        container.innerHTML += card;
}
const btnAgregar = document.getElementsByClassName('btnAgregar');

for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAlCarrito)
    
}

}

desplegarProductos();


function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const prodEncontrado = productos.find(prod => prod.id == idBoton)
    const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    if(!enCarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
    }
    //Cancelamos el compottamiento del evento
    e.preventDefault ();
    Swal.fire("Se agrego al carrito"); //xq no me toma el nombre?//
    //puedo dejarlo sin el sweet para evitar los alert//
    /*console.log(carrito)*/
    localStorage.setItem('carrito', JSON.stringify(carrito))
}



const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.length



//Formulario

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validaciondeFormulario);

function validaciondeFormulario(e) {
    e.preventDefault ();
    Swal.fire("Muchas gracias por suscribirse");
}
