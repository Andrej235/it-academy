// Global shopping cart total in USD
let amount = 0;

// Product 1
const PRODUCT1_NAME = "Laptop";
const PRODUCT1_PRICE = 150000;
const PRODUCT1_QTY = 2;

// Product 2
const PRODUCT2_NAME = "Keyboard";
const PRODUCT2_PRICE = 9000;
const PRODUCT2_QTY = 5;

// Tax and Currency
const VAT_RATE = 0.2;
const CURRENCY = "EUR";
const USD_PER_EUR = 1.16;

// Coupon
const RAW_COUPON = "SAVE10";

// typeof examples
console.log(typeof PRODUCT1_NAME); // string
console.log(typeof PRODUCT1_PRICE); // number
console.log(typeof VAT_RATE); // number

// Function to normalize coupon
function normalizeCoupon(code) {
  return code.trim().toUpperCase();
}

const NORMALIZED_COUPON = normalizeCoupon("  sAVe10   ");
console.log(NORMALIZED_COUPON); // "SAVE10"

// Coupon validation
function validateAndNotify() {
  const promoInput = document.getElementById("promo-input").value;
  const normalizedInput = normalizeCoupon(promoInput);

  if (normalizedInput === NORMALIZED_COUPON) {
    alert("The entered code is valid.");
  } else {
    alert("The entered code is invalid.");
  }
}

// User login
function login() {
  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  if (emailInput === "admin" && passwordInput === "admin") {
    return true;
  } else {
    return false;
  }
}

// Function to add product price to total
function addToAmount(price) {
  amount += price;
  console.log(`Total amount: $${amount.toFixed(2)}`);
}

addToAmount(100); // 100
addToAmount(229.99); // 329.99
addToAmount(49.99); // 379.98

// Cart link
document
  .querySelector(`.actions > a[href="./cart.html"]`)
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    alert(`Total amount in cart: $${amount.toFixed(2)}`);
  });
