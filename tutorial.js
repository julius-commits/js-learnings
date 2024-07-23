let count = 0;
let increase = document.querySelector(".btn-increase");
let decrease = document.querySelector(".btn-decrease");
let reset = document.querySelector(".btn-reset");
let value = document.getElementById("value");

increase.addEventListener("click", () => {
  count++;
  printResult();
});

decrease.addEventListener("click", () => {
  count--;
  printResult();
});

reset.addEventListener("click", () => {
  value.textContent = 0;
});

function printResult() {
  if (count > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
  value.textContent = count;
}
