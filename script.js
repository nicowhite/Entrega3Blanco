// creo un array vacio, que representa el carrito donde se van a agregar los items
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];;

// contiene una lista de boosters distintos
const boosters = [
  {
    id: 1,
    nombre: "Eldraine Draft Booster",
    precio: 15,
    imagen: "images/booster.jpg",
  },
  {
    id: 2,
    nombre: "Eldraine Set Booster",
    precio: 11,
    imagen: "images/booster2.jpg",
  },
  {
    id: 3,
    nombre: "The Brothers War Booster",
    precio: 24,
    imagen: "images/booster3.jpg",
  },
  {
    id: 4,
    nombre: "Phyrexia Draft Booster",
    precio: 6,
    imagen: "images/booster4.jpg",
  },
];

// funcion que agrega productos al carrito, toma product como parametro, que es uno de los boosters del array
function agregarAlCarrito(product) {
  const existingProduct = carrito.find((item) => item.id === product.id);

  if (existingProduct) {
    // si el producto ya existe, incrementa la cantidad por 1
    existingProduct.cantidad += 1;
  } else {
    // si es un nuevo, add it to the cart with quantity 1
    product.cantidad = 1;
    carrito.push(product);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));

  actualizarCarrito();
}

function actualizarCarrito() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  cartItems.innerHTML = "";

  let total = 0;

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `  <img src="${
      item.imagen
    }" style="width: 50px; height: 40px;" alt="">  ${item.nombre} - $ ${
      item.precio * item.cantidad.toFixed(2)
    } Cantidad: ${
      item.cantidad
    } <button class="btn btn-success mas">+</button ><button class="btn btn-danger less">-</button> `;
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

