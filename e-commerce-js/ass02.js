//#region Classes

class Product {
  id;
  name;
  price;
  #quantity;
  category;

  constructor(id, name, price, quantity, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.#quantity = quantity;
    this.category = category;
  }

  get quantity() {
    return this.#quantity;
  }

  decreaseStock(qty) {
    if (qty > this.#quantity) {
      throw new Error(
        `Cannot decrease quantity by ${qty}. Only ${this.#quantity} in stock.`,
      );
    }
    this.#quantity -= qty;
  }

  increaseStock(qty) {
    if (qty < 0) {
      throw new Error(`Cannot increase quantity by a negative value: ${qty}.`);
    }

    this.#quantity += qty;
  }
}

class User {
  username;
  email;
  #isLoggedIn;

  constructor(username, email, isLoggedIn = false) {
    this.username = username;
    this.email = email;
    this.#isLoggedIn = isLoggedIn;
  }

  get isLoggedIn() {
    return this.#isLoggedIn;
  }

  login() {
    this.#isLoggedIn = true;
  }

  logout() {
    this.#isLoggedIn = false;
  }

  getDiscount() {
    return 0;
  }
}

class Admin extends User {
  role;

  constructor(username, email, isLoggedIn = false, role = "admin") {
    super(username, email, isLoggedIn);
    this.role = role;
  }

  addNewProduct(products, product) {
    if (!(product instanceof Product)) {
      throw new Error("Invalid product. Must be an instance of Product class.");
    }

    if (typeof products !== "object" || !Array.isArray(products)) {
      throw new Error("Invalid products list. Must be an array.");
    }

    if (products.some((p) => p.id === product.id)) {
      throw new Error(`Product with id ${product.id} already exists.`);
    }

    products.push(product);
  }

  getDiscount() {
    return 0.1;
  }
}

class Cart {
  constructor(items = [], totalPrice = 0) {
    this.items = items;
    this.totalPrice = totalPrice;
  }
}

//#endregion

//#region Tests (to run just execute `node ass01.js` in your terminal)

const products = [
  new Product(1, "Laptop", 899.99, 5, "Electronics"),
  new Product(2, "Wireless Mouse", 29.99, 50, "Accessories"),
  new Product(3, "USB-C Cable", 12.99, 100, "Cables"),
];

const user = new User("andrej", "andrej@nenadic.dev", true);
const admin = new Admin("Neki admin", "andrej@nenadic.dev");

const cart = new Cart(
  [
    { ...products[1], quantity: 1 },
    { ...products[2], quantity: 2 },
  ],
  products[1].price + products[2].price * 2,
);

const testProduct = products[0];

console.log("q:", testProduct.quantity); // 5
testProduct.decreaseStock(3);
console.log("q:", testProduct.quantity); // 2
testProduct.increaseStock(5);
console.log("q:", testProduct.quantity); // 7

try {
  testProduct.decreaseStock(9999);
} catch (e) {
  console.log("Error:", e.message);
}

try {
  testProduct.increaseStock(-5);
} catch (e) {
  console.log("Error:", e.message);
}

console.log(user.username, "- logged in:", user.isLoggedIn);
user.login();
console.log(user.username, "- logged in:", user.isLoggedIn);

console.log(user.username, "- discount:", user.getDiscount()); // 0

user.logout();
console.log(user.username, "- logged in:", user.isLoggedIn);

console.log(
  "Admin:",
  admin.username,
  "- Role:",
  admin.role,
  "- logged in:",
  admin.isLoggedIn,
);

admin.login();
console.log(admin.username, "- logged in:", admin.isLoggedIn);

console.log("Admin discount:", admin.getDiscount()); // 0.1

admin.logout();
console.log(admin.username, "- logged in:", admin.isLoggedIn);

// addNewProduct tests

// dobar
const keyboard = new Product(4, "Keyboard", 79.99, 20, "Accessories");
const headphones = new Product(5, "Headphones", 64.99, 15, "Accessories");

admin.addNewProduct(products, keyboard);
console.log("Product added. Total products:", products.length); // 4

// los nis
try {
  admin.addNewProduct(123, headphones);
} catch (e) {
  console.log("Error:", e.message);
}

// ubacena korpa umesto proizvoda
try {
  admin.addNewProduct(products, cart);
} catch (e) {
  console.log("Error:", e.message);
}

// duplikat id-a
try {
  admin.addNewProduct(
    products,
    keyboard, // vec ubacen product u prethodnom testu, ima id 4
  );
} catch (e) {
  console.log("Error:", e.message);
}

//#endregion
