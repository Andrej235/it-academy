//#region Data

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 899.99,
    quantity: 5,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 29.99,
    quantity: 50,
    category: "Accessories",
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 12.99,
    quantity: 100,
    category: "Cables",
  },
];

const user = {
  username: "andrej",
  email: "andrej@nenadic.dev",
  isLoggedIn: true,
};

const cart = {
  items: [
    { ...products[1], quantity: 1 },
    { ...products[2], quantity: 2 },
  ],
  totalPrice: products[1].price + products[2].price * 2,
};

//#endregion

//#region Functions

function isInStock(product, requestedQty) {
  return product.quantity >= requestedQty;
}

function addToCart(cart, product, qty) {
  if (!isInStock(product, qty)) {
    console.log(
      `Sorry, not enough stock for ${product.name}. Available: ${product.quantity}`,
    );
    return;
  }

  const existingItem = cart.items.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.items.push({ ...product, quantity: qty });
  }

  product.quantity -= qty;
  cart.totalPrice += product.price * qty;
  cart.totalPrice = Math.round(cart.totalPrice * 100) / 100; // 2 dec
}

function removeFromCart(cart, productId) {
  const itemIndex = cart.items.findIndex((item) => item.id === productId);

  if (itemIndex === -1) {
    console.log(`Product with id ${productId} not found in cart.`);
    return;
  }

  const item = cart.items[itemIndex];
  const product = products.find((p) => p.id === productId);

  if (product) {
    product.quantity += item.quantity;
  }

  cart.totalPrice -= item.price * item.quantity;
  // clamp it to 0 to make sure it doesn't go into negative due to floating point issues, test cases reveal that it can happen when we remove a bunch of products
  cart.totalPrice = Math.max(Math.round(cart.totalPrice * 100) / 100, 0);
  cart.items.splice(itemIndex, 1);
}

const getCheapProducts = (products, limit) =>
  products.filter((product) => product.price < limit);

const getProductsByCategory = function (products, category) {
  return products.filter(function (p) {
    return p.category === category;
  });
};

//#endregion

//#region Tests (to run just execute `node ass01.js` in your terminal)

// isInStock
console.log(isInStock(products[0], 3)); // true
console.log(isInStock(products[0], 5)); // true
console.log(isInStock(products[0], 10)); // false
console.log(isInStock(products[1], 50)); // true
console.log(isInStock(products[1], 51)); // false
console.log(isInStock(products[2], 100)); // true
console.log(isInStock(products[2], 150)); // false

// addToCart
addToCart(cart, products[0], 2);
console.log(cart);
addToCart(cart, products[0], 4); // Not enough stock
addToCart(cart, products[1], 10);
console.log(cart);
addToCart(cart, products[2], 50);
console.log(cart);
addToCart(cart, products[2], 51); // Not enough stock

// removeFromCart
removeFromCart(cart, 1);
console.log(cart);
removeFromCart(cart, 2);
console.log(cart);
removeFromCart(cart, 3);
console.log(cart);
removeFromCart(cart, 999); // Product not found

// getCheapProducts
console.log(getCheapProducts(products, 50));
console.log(getCheapProducts(products, 99999999)); // All products
console.log(getCheapProducts(products, 0)); // []

// getProductsByCategory
console.log(getProductsByCategory(products, "Electronics"));
console.log(getProductsByCategory(products, "Accessories"));
console.log(getProductsByCategory(products, "Cables"));
console.log(getProductsByCategory(products, "SomethingThatDoesn'tExist")); // []

//#endregion
