const products = [
  { id: 1, name: "Smartphone", price: 299.99 },
  { id: 2, name: "Headphones", price: 49.99 },
  { id: 3, name: "Keyboard", price: 79.99 },
  { id: 4, name: "Laptop", price: 799.99 }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
if (cartCount) cartCount.textContent = cart.length;

if (productList) {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  if (cartCount) cartCount.textContent = cart.length;
  alert("Added to cart!");
}
