const signup_form_selector = document.querySelector("#signupForm");
const username_input_signup_selector = document.querySelector("#userNameInputsignup");
const email_input_signup_selector = document.querySelector("#userEmailInputsignup");
const password_input_signup_selector = document.querySelector("#userPasswordInputsignup");
const repeat_password_input_selector = document.querySelector("#userRepeatPasswordInputsignup");
const btn_signup_selector = document.querySelector("#signupBtnSubmit");
btn_signup_selector.disabled = true;

function showErrorMsg() {
  const signup_error_msg_selector = document.querySelector("#signupErrorMsg");
  const signup_error_msg_content = document.createElement("p");
  signup_error_msg_content.classList.add = ("class", "jumbotron", "p-1");
  signup_error_msg_content.style.background = "#FF6557";
  signup_error_msg_content.style.borderRadius = "8px";
  signup_error_msg_content.textContent =
    "¡Lo sentimos! Todos los campos son obligatorios. Deben cumplir mínimo de 8 caracteres y un máximo de 30";
  signup_error_msg_selector.append(signup_error_msg_content);
  setTimeout(() => {
    signup_error_msg_content.remove();
  }, 4000);
}

username_input_signup_selector.onblur = signupInputsValidator;
email_input_signup_selector.onblur = signupInputsValidator;
password_input_signup_selector.onblur = signupInputsValidator;
repeat_password_input_selector.onblur = passwordMatchValidator;

function passwordMatchValidator () {
  if (
    password_input_signup_selector.value ===
    repeat_password_input_selector.value
  ) {
    btn_signup_selector.disabled = false;
  } else {
    btn_signup_selector.disabled = true;
  }
}

function signupInputsValidator () {
  if (
    document.querySelector("#userNameInputsignup").value.length < 8 ||
    document.querySelector("#userEmailInputsignup").value.length < 8 ||
    document.querySelector("#userPasswordInputsignup").value.length < 8 ||
    document.querySelector("#userRepeatPasswordInputsignup") ||
    document.querySelector("#userNameInputsignup").value.length >= 30 ||
    document.querySelector("#userEmailInputsignup").value.length >= 30 ||
    document.querySelector("#userPasswordInputsignup").value.length >= 30 ||
    document.querySelector("#userRepeatPasswordInputsignup").value.length >= 30
  ) {
    btn_signup_selector.disabled = true;
    removeDuplicateSignupMsg();
    showErrorMsg();
  } else {
    btn_signup_selector.disabled = false;
  }
}

function removeDuplicateSignupMsg() {
  const signup_error_msg_content = document.querySelector("#signupErrorMsg");
  if (signup_error_msg_content.firstChild) {
    signup_error_msg_content.removeChild(signup_error_msg_content.firstChild);
  }
}

signup_form_selector.addEventListener("submit", emailSignupValidator);

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function emailSignupValidator (e) {
  e.preventDefault();
  if(e.target.type === "email") {
    if(emailRegExp.test(e.target.value)) {
      const signup_error_msg_selector = document.querySelector("#errorMsg");
      const signup_error_msg_content = document.createElement("p");
      signup_error_msg_content.classList.add = ("class", "jumbotron", "p-1");
      signup_error_msg_content.style.background = "#FF6557";
      signup_error_msg_content.style.borderRadius = "8px";
      signup_error_msg_content.textContent = "Por favor, introduce un email dirección válida";
      signup_error_msg_selector.append(signup_error_msg_content);
      setTimeout(() => {
        signup_error_msg_content.remove();
      }, 3000);
    }
  };
}; 

