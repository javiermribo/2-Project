// pagina de contacto variables
const inputs = document.querySelectorAll(".input");
const usuario = document.querySelector("#name-cont");
const email = document.querySelector("#email-cont");
const telefono = document.querySelector("#phone-cont");
const mensaje = document.querySelector("#message-cont");
const form = document.querySelector("#contact-form");
const sendBtn = document.querySelector("#enviar-form");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//funcion focus y blur

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// pagina de contacto validaciones

eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", startApp);
  usuario.addEventListener("blur", validateForm);
  email.addEventListener("blur", validateForm);
  telefono.addEventListener("blur", validateForm);
  mensaje.addEventListener("blur", validateForm);
  sendBtn.addEventListener("click", submitForm);
}

function startApp() {
  sendBtn.disabled = true;
}

function validateForm(e) {
  const error = document.querySelector("p.error");

  if (e.target.value.length > 0) {
    if (error) {
      error.remove();
    }
    // todo bien
  } else {
    showError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (emailRegex.test(e.target.value)) {
      if (error) {
        error.remove();
      }
    } else {
      showError("El email no es valido");
    }
  }

  if (
    emailRegex.test(email.value) &&
    email.value !== "" &&
    mensaje.value !== "" &&
    usuario.value !== "" &&
    telefono.value !== ""
  ) {
    sendBtn.disabled = false;
  }
}

function showError(msg) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = msg;
  errorMessage.classList.add("error", "mt-2");
  const errors = document.querySelectorAll(".error");
  if (errors.length === 0) {
    form.append(errorMessage);
  }
}

function submitForm() {}

function resetForm() {
  form.reset();
}