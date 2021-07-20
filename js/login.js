const username_input_selector = document.querySelector("#userNameInputLogin");
const password_input_selector = document.querySelector("#userPasswordInputLogin");
const btn_login_selector = document.querySelector("#loginBtnSubmit");
btn_login_selector.disabled = true;

function showErrorMsg () {
  const error_msg_container_selector = document.querySelector("#errorMsg");
  const error_msg_content = document.createElement("p");
  error_msg_content.classList.add = ("class", "jumbotron", "p-1");
  error_msg_content.style.background = "#FF6557";
  error_msg_content.style.borderRadius = "8px";
  error_msg_content.textContent = "¡Lo sentimos! Todos los campos son obligatorios. Deben cumplir mínimo de 8 caracteres y un máximo de 30";
  error_msg_container_selector.append(error_msg_content);
  setTimeout(() => {
    error_msg_content.remove();
  }, 4000);
}

username_input_selector.addEventListener("blur", loginEmptyInputs);
password_input_selector.addEventListener("blur", loginEmptyInputs);

function loginEmptyInputs () {
  if (
    document.querySelector("#userNameInputLogin").value.length <= 8 ||
    document.querySelector("#userPasswordInputLogin").value.length <= 8 ||
    document.querySelector("#userNameInputLogin").value.length >= 30 ||
    document.querySelector("#userPasswordInputLogin").value.length >= 30
  ) {
    btn_login_selector.disabled = true;
    removeDuplicateNews();
    showErrorMsg();
  } else {
    btn_login_selector.disabled = false;
  }
  }

function removeDuplicateNews() {
  const error_msg_content = document.querySelector("#errorMsg");
  if (error_msg_content.firstChild) {
    error_msg_content.removeChild(error_msg_content.firstChild);
  }
}

/* loginForm.addEventListener("submit", emailLoginValidator);

function emailLoginValidator (e) {
  e.preventDefault();
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      loginForm.userNameInputLogin.value
    )
  ) {
    return true;
  };
    const email_error_msg_container_selector = document.querySelector("#errorMsg");
    const email_error_msg_content = document.createElement("p");
    email_error_msg_content.classList.add = ("class", "jumbotron", "p-1");
    email_error_msg_content.style.background = "#FF6557";
    email_error_msg_content.style.borderRadius = "8px";
    email_error_msg_content.textContent = "Por favor, introduce un email dirección válida";
    email_error_msg_container_selector.append(email_error_msg_content);
    setTimeout(() => {
      email_error_msg_content.remove();
    }, 3000);
};  */