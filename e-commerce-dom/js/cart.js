let count = 0;

export function incrementCount() {
  count++;
  updateCartCount();
}

export function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count"); // we can't cache this element ebcause this needs to work across all pages
  if (!cartCountElement) {
    console.error("Cart count element not found on this page.");
    return;
  }

  cartCountElement.textContent = count;
}
