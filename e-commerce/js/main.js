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
const RAW_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

// typeof examples
console.log(typeof PRODUCT1_NAME); // string
console.log(typeof PRODUCT1_PRICE); // number
console.log(typeof VAT_RATE); // number

// Function to normalize coupon
function normalizeCoupon(code) {
  return code.trim().toUpperCase();
}

// Function to check if coupon is valid, expects an already normalized code
function isValidCoupon(code) {
  return RAW_COUPONS.includes(code);
}

console.log(normalizeCoupon("  sAVe10   ")); // "SAVE10"

// Coupon validation
function validateAndNotify() {
  const promoInput = document.getElementById("promo-input").value;
  const normalizedInput = normalizeCoupon(promoInput);

  if (isValidCoupon(normalizedInput)) {
    switch (normalizedInput) {
      case "SAVE10":
        alert("Coupon applied: 10% off!");
        break;
      case "SAVE15":
        alert("Coupon applied: 15% off!");
        break;
      case "FREESHIP":
        alert("Coupon applied: Free Shipping!");
        break;
    }
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

const allProducts = [
  { name: "Product 1", price: 49.99, quantity: 8 },
  { name: "Product 2", price: 79.99, quantity: 11 },
  { name: "Product 3", price: 99.99, quantity: 24 },
  { name: "Product 4", price: 59.99, quantity: 2 },
  { name: "Product 5", price: 89.99, quantity: 7 },
  { name: "Product 6", price: 69.99, quantity: 19 },
  { name: "Product 7", price: 109.99, quantity: 6 },
  { name: "Product 8", price: 39.99, quantity: 8 },
  { name: "Product 9", price: 129.99, quantity: 18 },
  { name: "Product 10", price: 59.99, quantity: 1 },
  { name: "Product 11", price: 89.99, quantity: 9 },
  { name: "Product 12", price: 79.99, quantity: 6 },
];

const lowStock = allProducts.filter((product) => product.quantity < 10);
console.log("Low stock:", lowStock);

function calculateInventoryValue() {
  let totalValue = 0;

  for (let product of allProducts) {
    totalValue += product.price * product.quantity;
  }

  console.log(`Total inventory value: ${totalValue.toFixed(2)} USD`);
}

calculateInventoryValue();

function findProductByName(list, searchName) {
  const normalizedSearch = searchName.toLowerCase().trim();
  return (
    list.find(
      (product) => product.name.toLowerCase().trim() === normalizedSearch,
    ) || null
  );
}

// Test cases
console.log("Product 1", findProductByName(allProducts, "Product 1"));
console.log("product 5", findProductByName(allProducts, "product 5"));
console.log("PRODUCT 12", findProductByName(allProducts, "PRODUCT 12"));
console.log("Nonexistent ", findProductByName(allProducts, "Nonexistent"));
