const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greething = document.querySelector("#greething");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onSubmit);
function paintGreetings(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onSubmit);
} else{
    paintGreetings(savedUsername);
}