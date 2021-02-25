let lists = document.querySelectorAll("li");
let form = document.getElementById("form");
let input = document.getElementById("input");
let ul = document.getElementById("adding");
form.addEventListener("submit", e => {
  let li = document.createElement("li");
  e.preventDefault();
  let item = input.value;
  li.innerHTML = item;
  ul.appendChild(li);
  console.log(item);
});
for (let list of lists) {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger", "btm-sm", "float-right");
  btn.textContent = "Remove";
  list.appendChild(btn);
  //DOM Events
  btn.addEventListener("click", e => {
    console.log(e.target);
    //list.remove();
    btn.parentElement.remove();
  });
}
