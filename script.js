// creo un array vacio, que representa el carrito donde se van a agregar los items
const carrito = [];

// contiene una lista de boosters distintos
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

// funcion que agrega productos al carrito, toma product como parametro, que es uno de los boosters del array
function agregarAlCarrito(product) {

  const existingProduct = carrito.find((item) => item.id === product.id);

  if (existingProduct) {
    // si el producto ya existe, incrementa la cantidad por 1
    existingProduct.cantidad += 1;
  } else {
    // si es un nuevo producto, agregar al carrito con cantidad 1
    carrito.push(product);
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  cartItems.innerHTML = "";

  let total = 0;

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `  <img src="${item.imagen}" style="width: 30px; height: 60px;" alt="">  ${item.nombre} - $ ${item.precio * item.cantidad.toFixed(2)}`;
    cartItems.appendChild(li);

    total += item.precio * item.cantidad;
  });

  totalDisplay.textContent = total.toFixed(2);
}

const addToCartButtons = document.querySelectorAll(".agregar");
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => agregarAlCarrito(boosters[index]));
});


actualizarCarrito();
