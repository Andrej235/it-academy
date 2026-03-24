import { products } from "./products-repo.js";
import { updateCartCount, incrementCount } from "./cart.js";

updateCartCount(); // update on page load

const queryParams = new URLSearchParams(window.location.search);
const productId = +queryParams.get("id");

if (!productId) {
  window.location.href = "./shop.html";
}

const product = products.find((p) => p.id === productId);

if (!product) {
  window.location.href = "./shop.html";
}

const container = document.getElementById("main-body");

//#region Images

const productImagesContainer = document.createElement("div");
productImagesContainer.classList.add("product-image-container");

const mainImage = document.createElement("img");
mainImage.src = product.imageUrl;
mainImage.alt = product.name;

const extraImagesContainer = document.createElement("div");
extraImagesContainer.classList.add("extra-images-container");

product.extraImages.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = product.name;

  extraImagesContainer.appendChild(img);
});

productImagesContainer.appendChild(mainImage);
productImagesContainer.appendChild(extraImagesContainer);

//#endregion

//#region Data

const productDataContainer = document.createElement("div");
productDataContainer.classList.add("product-data-container");

const title = document.createElement("h1");
title.textContent = product.name;

const price = document.createElement("p");
price.classList.add("price");
price.textContent = `$${product.price.toFixed(2)}`;

const description = document.createElement("p");
description.classList.add("description");
description.textContent = product.description;

//#region Options

const colorOptionsContainer = document.createElement("div");
colorOptionsContainer.classList.add("color-options");

const colorOptionsTitle = document.createElement("h3");
colorOptionsTitle.textContent = "Select a color";

const colorsContainer = document.createElement("div");
colorsContainer.classList.add("colors");

product.colors.forEach((color, i) => {
  const colorBtn = document.createElement("button");
  colorBtn.classList.add("color");
  colorBtn.style.backgroundColor = color;

  if (i === 0) colorBtn.classList.add("selected");

  colorBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".color-options .color")
      .forEach((btn) => btn.classList.remove("selected"));

    colorBtn.classList.add("selected");
  });

  colorsContainer.appendChild(colorBtn);
});

colorOptionsContainer.appendChild(colorOptionsTitle);
colorOptionsContainer.appendChild(colorsContainer);

const sizeOptionsContainer = document.createElement("div");
sizeOptionsContainer.classList.add("size-options");

const sizeOptionsTitle = document.createElement("h3");
sizeOptionsTitle.textContent = "Select a size";

const sizesContainer = document.createElement("div");
sizesContainer.classList.add("sizes");

product.sizes.forEach((size, i) => {
  const sizeBtn = document.createElement("button");
  sizeBtn.classList.add("size");
  sizeBtn.textContent = size;

  if (i === 0) sizeBtn.classList.add("selected");

  sizeBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".size-options .size")
      .forEach((btn) => btn.classList.remove("selected"));

    sizeBtn.classList.add("selected");
  });

  sizesContainer.appendChild(sizeBtn);
});

sizeOptionsContainer.appendChild(sizeOptionsTitle);
sizeOptionsContainer.appendChild(sizesContainer);

const addToCartBtn = document.createElement("button");
addToCartBtn.classList.add("add-to-cart-btn");
addToCartBtn.textContent = "Add to Cart";

addToCartBtn.addEventListener("click", incrementCount);

//#endregion

productDataContainer.appendChild(title);
productDataContainer.appendChild(price);
productDataContainer.appendChild(description);
productDataContainer.appendChild(colorOptionsContainer);
productDataContainer.appendChild(sizeOptionsContainer);
productDataContainer.appendChild(addToCartBtn);
//#endregion

container.appendChild(productImagesContainer);
container.appendChild(productDataContainer);

/*
        <div class="product-data-container">
          <div class="color-options">
            <h3>Select a color</h3>

            <div class="colors">
              <button class="color selected" style="background-color: #000" />
              <button class="color" style="background-color: #fff" />
              <button class="color" style="background-color: #f00" />
            </div>
          </div>

          <div class="size-options">
            <h3>Select a size</h3>

            <div class="sizes">
              <button class="size selected">S</button>
              <button class="size">M</button>
              <button class="size">L</button>
              <button class="size">XL</button>
            </div>
          </div>

          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
*/
