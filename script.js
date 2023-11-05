const carrito = [];

const boosters = [
  {
    id: 1,
    nombre: "Phyrexia Booster",
    precio: 15,
    imagen: "images/booster.png",
  },
  {
    id: 2,
    nombre: "Dominaria Booster",
    precio: 11,
    imagen: "images/booster2.png",
  },
  {
    id: 3,
    nombre: "Dominaria Draft Booster",
    precio: 24,
    imagen: "images/booster3.png",
  },
  {
    id: 4,
    nombre: "Phyrexia Draft Booster",
    precio: 6,
    imagen: "images/booster4.png",
  },
];

// se va a buscar si booster está creado en localStorage, si no esta, se va a cargar(setItem), si ya existe, no hace nada.
JSON.parse(localStorage.getItem("boosters")) || localStorage.setItem("boosters", JSON.stringify(boosters));
console.log(boosters[0]);
console.log(boosters[1]);


function agregarAlCarrito(product){
    carrito.push(product);


    actualizarCarrito();
}


function actualizarCarrito(){
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    cartItems.innerHTML = "";

    let total = 0;

}



