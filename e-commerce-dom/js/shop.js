import { products } from "./products-repo.js";
import { incrementCount, updateCartCount } from "./cart.js";

updateCartCount(); // update on page load

const productsContainer = document.getElementById("product-grid");

products.forEach((product) => {
  const productCard = createProductCard(product);
  productsContainer.appendChild(productCard);
});

function createProductCard(product) {
  const parent = document.createElement("a");
  parent.className = "product-card";
  parent.href = `./product.html?id=${product.id}`;

  const img = document.createElement("img");
  img.src = product.imageUrl;
  img.alt = product.name;

  const innerDiv = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = product.name;

  const p = document.createElement("p");
  p.textContent = `$${product.price}`;

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.addEventListener("click", handleAddToCart);

  innerDiv.appendChild(h3);
  innerDiv.appendChild(p);
  innerDiv.appendChild(button);

  parent.appendChild(img);
  parent.appendChild(innerDiv);

  return parent;
}

function handleAddToCart(event) {
  event.stopPropagation();
  incrementCount();
}
