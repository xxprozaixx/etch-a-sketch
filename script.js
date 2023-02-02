const today = new Date();
const year = today.getFullYear();
document.querySelector('#year').innerHTML = year;

const container = document.getElementById("grid-container");
for (let i = 0; i < 24; i++) {
  let div = document.createElement("div");
  div.classList.add("grid-item");
  div.textContent = i + 1;
  container.appendChild(div);
}