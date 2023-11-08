const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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

function agregarAlCarrito(producto) {
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function actualizarCarrito() {
  const itemsCarrito = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  itemsCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `  <img src="${
      item.imagen
    }" style="width: 50px; height: 40px;" alt="">  ${item.nombre} - $ ${(
      item.precio * item.cantidad
    ).toFixed(2)} Cantidad: ${item.cantidad}
      <button class="btn btn-success mas">+</button>
      <button class="btn btn-danger less">-</button> `;
    itemsCarrito.appendChild(li);

    total += item.precio * item.cantidad;

    const mas = li.querySelector(".mas");
    mas.addEventListener("click", () => {
      item.cantidad += 1;
      actualizarCarrito();
    });

    const menos = li.querySelector(".less");
    menos.addEventListener("click", () => {
      if (item.cantidad > 1) {
        item.cantidad -= 1;
      } else {
        carrito = carrito.filter((cartItem) => cartItem.id !== item.id);
      }
      actualizarCarrito();
    });
  });

  totalDisplay.textContent = total.toFixed(2);
}

const agregarBotones = document.querySelectorAll(".agregar");
agregarBotones.forEach((button, index) => {
  button.addEventListener("click", () => agregarAlCarrito(boosters[index]));
});

const vaciarCarritoButton = document.getElementById("clear-cart-button");
vaciarCarritoButton.addEventListener("click", vaciarCarrito);

actualizarCarrito();

function vaciarCarrito() {
  carrito.length = 0;
  actualizarCarrito();

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

actualizarCarrito();
