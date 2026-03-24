let count = +localStorage.getItem("cartCount");
count ||= 0;

const cartCountElement = document.getElementById("cart-count");

export function incrementCount() {
  count++;
  updateCartCount();
}

export function updateCartCount() {
  if (!cartCountElement) {
    console.error("Cart count element not found on this page.");
    return;
  }

  cartCountElement.textContent = count;
  localStorage.setItem("cartCount", count);
}
