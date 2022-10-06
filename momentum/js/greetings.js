const loginForm = document.querySelector("#login__form");
const loginInputTxt = loginForm.querySelector(".input");
const greeting = document.querySelector("#greeting");

const HIDDEN__CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
  e.preventDefault();
  const username = loginInputTxt.value;
  loginForm.classList.add(HIDDEN__CLASSNAME);
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
};

const paintGreetings = (username) => {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN__CLASSNAME);
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName == null) {
  // 폼을 보여줘
  loginForm.classList.remove(HIDDEN__CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // h1 을 보여줘
  paintGreetings(username);
}
