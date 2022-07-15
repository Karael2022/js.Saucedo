

/*document.addEventListener('DOMContentLoaded', () =>{




// Variables//

let datos = [];

let carrito =[];
const divisa = '$'
const DOMitem = document.getElementById('items');
const DomCarrito = document.querySelector('#carrito');
const DomTotal = document.querySelector('#total');
const DomVaciar = document.querySelector('bottonVaciar');
const milocalStorage = window.localStorage;


let productos = [
    {id:1, 
    nombre:"Xiaomi Band 6", 
    precio: "5.000",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/174852-800-auto?width=800&height=auto&aspect=true",
    
},
{
    id:2, 
    nombre:"Smartwatch Colmi Sky 5", 
    precio: "14.795",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/214078-800-auto?width=800&height=auto&aspect=true", 
    
},
    {id:3,
    nombre:"Smartwactch Garmin Rose", 
    precio: "234.295",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/214962-800-auto?width=800&height=auto&aspect=true", 
    
},
{
    id:4,
    nombre:"Smartwatch Colmi P28 Plus", 
    precio: "15.095",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/209935-800-auto?width=800&height=auto&aspect=true",
    
},
{
    id:5,
    nombre:"Smartwatch Garmin Venu", 
    precio: "126.999",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/214752-800-auto?width=800&height=auto&aspect=true",
    
},
{
    id:6,
    nombre:"Smartwatch Amazfit GTS", 
    precio: "38.895",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/190687-800-auto?width=800&height=auto&aspect=true",
    
},];

});*/


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
   /* //Cancelamos el compottamiento del evento
    e.preventDefault ();*/
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
    

