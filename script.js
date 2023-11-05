
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
  carrito.push(product);

  // Update the cart display
  actualizarCarrito();
}

// Function to update the cart display
function actualizarCarrito() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  // Clear the current cart display
  cartItems.innerHTML = "";

  let total = 0;

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    cartItems.appendChild(li);

    total += item.precio;
  });

  // Update the total price display
  totalDisplay.textContent = total.toFixed(2);
}

// Add a click event listener to the "Agregar al Carrito" buttons for each product
const addToCartButtons = document.querySelectorAll(".agregar");
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => agregarAlCarrito(boosters[index]));
});

// Call the updateCart function initially to set up the cart display
actualizarCarrito();