const products = [
  { id: 1, name: "Smartphone", price: 299.99 },
  { id: 2, name: "Headphones", price: 49.99 },
  { id: 3, name: "Keyboard", price: 79.99 },
  { id: 4, name: "Laptop", price: 799.99 }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

if (productList) {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      addToCart(product);
    });

    productList.appendChild(div);
  });
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

updateCartCount();
