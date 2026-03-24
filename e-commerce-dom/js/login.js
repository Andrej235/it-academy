import { updateCartCount } from "./cart.js";

updateCartCount(); // update on page load

const loginForm = document.getElementById("login-form");
const loginStatus = document.getElementById("login-status");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valid = validate();
  if (valid) {
    loginStatus.textContent = "Login successful. Welcome!";
    loginStatus.classList.remove("error");
    loginStatus.classList.add("success");
  } else {
    loginStatus.classList.remove("success");
    loginStatus.classList.add("error");
  }
});

emailInput.addEventListener("input", () => {
  const valid = validate();

  if (!valid) {
    loginStatus.classList.remove("success");
    loginStatus.classList.add("error");
  }
});

passwordInput.addEventListener("input", () => {
  const valid = validate();

  if (!valid) {
    loginStatus.classList.remove("success");
    loginStatus.classList.add("error");
  }
});

function validate() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email && !password) {
    loginStatus.textContent = "Please, enter email and password";
    return false;
  }

  if (!email) {
    loginStatus.textContent = "Please, enter email.";
    return false;
  }

  if (password.length < 6) {
    loginStatus.textContent = "Password must contain at least 6 characters.";
    return false;
  }

  loginStatus.textContent = "";
  return true;
}
