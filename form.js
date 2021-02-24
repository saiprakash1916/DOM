let form = document.createElement("form");
form.setAttribute("method", "get");
form.setAttribute("action", "#");
let lable_username = document.createElement("lable");
lable_username.textContent = "username";
lable_username.setAttribute("for", "username");
let lable_password = document.createElement("lable");
lable_password.textContent = "password";
lable_password.setAttribute("for", "password");
console.log(form);
console.log(lable_username);
console.log(lable_password);
let username_input = document.createElement("input");
username_input.setAttribute("type", "text");
username_input.setAttribute("id", "username");
username_input.setAttribute("name", "username");
username_input.setAttribute("placeholder", "Enter username");
username_input.className = "form-control";
let password_input = document.createElement("input");
password_input.setAttribute("type", "password");
password_input.setAttribute("id", "password");
password_input.setAttribute("name", "password");
password_input.setAttribute("placeholder", "Enter password");
password_input.className = "form-control";
let btn = document.createElement("button");
btn.textContent = "login";
btn.classList.add("btn", "btn-success", "my-2");
form.append(
  lable_username,
  username_input,
  lable_password,
  password_input,
  btn
);
document.body.classList.add("container", "my-2", "col-md-4", "mx-auto");
document.body.appendChild(form);
