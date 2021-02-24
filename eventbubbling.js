let child = document.getElementById("child");
let parent = document.getElementById("parent");
let grandparent = document.getElementById("grandParent");
child.addEventListener("click", e => {
  console.log("chlid clicked");
});
parent.addEventListener("click", e => {
  console.log("parent clicked");
});
grandparent.addEventListener("click", e => {
  console.log("grand parent clicked");
});
