import { products } from "./products-repo.js";
import { incrementCount, updateCartCount } from "./cart.js";

updateCartCount(); // update on page load

const productsContainer = document.getElementById("product-grid");

products.forEach((product) => {
  const productCard = createProductCard(product);
  productsContainer.appendChild(productCard);
});

function createProductCard(product) {
  const div = document.createElement("div");
  div.className = "product-card";

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

  div.appendChild(img);
  div.appendChild(innerDiv);

  return div;
}

function handleAddToCart(event) {
  event.stopPropagation();
  incrementCount();
}
