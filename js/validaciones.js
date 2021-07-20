let currentUser = localStorage.getItem("user");
let userAtTheMoment = JSON.parse(localStorage.getItem("actualUser"));
let isLogged = false;

class User {
  constructor(userName, password, role) {
    this.userName = userName;
    this.password = password;
    this.role = role;
  }

  static redirectUser(userType) {
    const users = StoreUsers.getUsers();
    const actualUser = users.find(
      (user) =>
        userNameInputLogin.value === user.userName &&
        userPasswordInputLogin.value === user.password
    );
    localStorage.setItem("actualUser", JSON.stringify(actualUser));
    checkUser(
      JSON.parse(localStorage.getItem("actualUser")),
      navbarWithUser,
      noUserNvabar
    );
    if (userType.userName === "Administrator") {
      window.location.href = "admin-page.html";
      checkUser(navbarWithUser);
    } else {
      window.location.href = "index.html";
    }
  }
}

class Admin extends User {
  constructor(userName, password, role) {
    super(userName, password, role);
  }
}

class StoreUsers {
  static getUsers() {
    let users;
    if (localStorage.getItem("user") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("user"));
    }
    return users;
  }

  static addUserToLS(user) {
    const users = StoreUsers.getUsers();
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
  }
}

const form_selector2 = document.querySelector("#loginForm");
if (form_selector2) {
  form_selector2.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const userName = document.querySelector("#userNameInputLogin").value;
    const password = document.querySelector("#userPasswordInputLogin").value;

    const actualUser = user.find(
      (user) =>
      user.userName === userName &&
      user.password === password
    );
    localStorage.setItem("actualUser", JSON.stringify(actualUser));
    checkUser(actualUser, noUserNvabar, navbarWithUser);
    User.redirectUser(user);
  });
}

const form_selector = document.querySelector("#signupForm");
if (form_selector) {
  form_selector.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.querySelector("#userNameInputsignup").value;
    const password = document.querySelector("#userPasswordInputsignup").value;

    const user = new User(userName, password);

    StoreUsers.addUserToLS(user);
  });
}

const navbarWithUser = (user) => {
  const navbar_replecement = document.getElementById("navbarReplace");
  const new_navbar_with_user = document.createElement("nav");
  new_navbar_with_user.classList.add(
    "class",
    "navbar",
    "fixed-top",
    "navbar-expand-lg",
    "navbar-dark",
    "navbarColor"
  );
  new_navbar_with_user.id = "test";
  new_navbar_with_user.innerHTML = `
      <a class="navbar-brand text-light" href="index.html">Songify</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navIconColor"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-light" href="index.html">Home</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Sobre nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="contact-page.html">Contacto</a>
          </li>
        </ul>
        <div class="dropdown">
          <button class="btn button-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hola, ${user.userName}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="admin-page.html">Panel de admin.</a>
            <button class="dropdown-item" id="logOutUserFn" onclick="logOutUserFn()">Cerrar sesión</button>
          </div>
        </div>
      </div>
      `;
  if (navbar_replecement) {
    navbar_replecement.parentElement.replaceChild(
      new_navbar_with_user,
      navbar_replecement
    );
  }
};

const noUserNvabar = () => {
  const no_user_navbar_replecement = document.getElementById("navbarReplace");
  const no_user_navbar = document.createElement("nav");
  no_user_navbar.classList.add(
    "class",
    "navbar",
    "fixed-top",
    "navbar-expand-lg",
    "navbar-dark",
    "navbarColor"
  );
  no_user_navbar.id = "test";
  no_user_navbar.innerHTML = `
      <a class="navbar-brand text-light" href="index.html">Songify</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navIconColor"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-light" href="index.html">Home</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Sobre nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="contact-page.html">Contacto</a>
          </li>
        </ul>
          <div class="signIn-signUp-btn" id="signInAnSignUp">
            <a class="btn my-2 my-sm-0 button-primary" href="signup-page.html">Registrarse</a>
            <a class="btn my-2 my-sm-0 button-secondary" href="login.html">Iniciar sesión</a>
          </div>
      </div>
      `;
  if (no_user_navbar_replecement) {
    no_user_navbar_replecement.parentElement.replaceChild(
      no_user_navbar,
      no_user_navbar_replecement
    );
  }
};

const checkUser = (isLogged, noUserNvabar, navbarWithUser) => {
  if (isLogged) {
    navbarWithUser(JSON.parse(localStorage.getItem("actualUser")));
  } else {
    noUserNvabar();
  }
};

const logOutUserFn = () => {
  localStorage.removeItem("actualUser");
  window.location.href = "index.html";
};

document.addEventListener("DOMContentLoaded", () => {
  const isUser = JSON.parse(localStorage.getItem("actualUser"));
  checkUser(isUser, noUserNvabar, navbarWithUser);
});

cc