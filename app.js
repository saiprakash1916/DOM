let headerBlock = document.getElementById("headerBlock");
let toggleBlock = document.getElementById("toggleBlock");
toggleBlock.addEventListener("click", e => {
  let hideOrShow = e.target.classList.toggle("active");
  if (hideOrShow === true) {
    headerBlock.style.display = "none";
    e.target.innerHTML = "Show";
    headerBlock.classList.add("Hide");
    headerBlock.style.transform = "translateY-70px";
    headerBlock.style.transition = "ease all 0.7s";
  } else {
    headerBlock.style.display = "block";
    e.target.innerHTML = "Hide";
    headerBlock.classList.remove("Hide");
  }
});
