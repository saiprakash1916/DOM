// let username = document.getElementById("username");
// console.log(username);
// username.addEventListener("keyup", e => {
//   console.log(e.target.value); //it is getting current value
// });
// let textArea = document.getElementById("textArea");
// let textAreaClone = document.getElementById("textAreaClone");
// textArea.addEventListener("keyup", e => {
//   let result = e.target.value;
//   textAreaClone.innerHTML = result;
//   if (result.length > 10) {
//     textAreaClone.style.color = "red";
//     textAreaClone.innerHTML = result;
//   } else if (result.length > 20 && result.length < 30) {
//     textAreaClone.style.color = "green";
//   }
// });
let username = document.getElementById("username");
let password = document.getElementById("password");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
username.addEventListener("keyup", e => {
  let result = e.target.value;
  if (result.length < 3) {
    username.style.color = "red";
    username.style.color = "black";
    user.innerHTML = `<p style="color:red">Username should be minimum 8 char</p>`;
  } else if (result.length > 3 && result.length < 8) {
    username.style.color = "orange";
    username.style.color = "black";
    user.innerHTML = `<p style="color:red">Username should be minimum 8 char</p>`;
  } else if (result.length > 8) {
    username.style.color = "green";
    username.style.color = "black";
    user.innerHTML = `<p style="color:green"></p>`;
  }
});
