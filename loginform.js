let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorBlock = document.getElementById("errorBlock");
//Submit Event is use to submit the form
form.addEventListener("submit", e => {
  let errorMeaasges = [];
  e.preventDefault();
  let user = username.value;
  let pass = password.value;
  //client side validation
  if (user === "" || user === null) {
    errorMeaasges.push("Username is Requried");
  }
  if (pass === "" || (pass === null && pass.length > 8)) {
    errorMeaasges.push("Password is Requried");
  }
  if (pass.length < 6) {
    errorMeaasges.push("Password should be minimum 6 charcters");
  }
  //Checking errors
  if (errorMeaasges.length > 0) {
    errorBlock.innerHTML = errorMeaasges.join("<br/>");
  } else {
    alert(`Username is ${user} password ${pass}`);
    username.value = "";
    password.value = "";
  }
});
username.addEventListener("keyup", e => {
  let res = e.target.value;
  if (res.length < 6) {
    username.style.borderColor = "red";
  } else if (res.length > 10) {
    username.style.borderColor = "green";
  }
});
password.addEventListener("keyup", e => {
  let res = e.target.value;
  if (res.length < 3) {
    password.style.borderColor = "red";
  } else if (res.length > 6) {
    password.style.borderColor = "green";
  }
});
