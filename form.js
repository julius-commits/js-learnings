let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let about = document.querySelector(".aboutYou");
let result = document.getElementById("result");
let printResult = document.querySelector(".print");

printResult.addEventListener("click", () => {
  let p1 = document.createElement("p");
  p1.textContent = firstName.value;
  result.appendChild(p1);
  let p2 = document.createElement("p");
  p2.textContent = about.value;
  result.appendChild(p2);
  let p3 = document.createElement("p");
  p3.textContent = lastName.value;
  result.appendChild(p3);
});
