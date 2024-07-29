let addBtn = document.querySelector("#additem");
let inputedItem = document.querySelector("#input");
let inputedItemContainer = document.getElementById("itemsContainer");
let itemArray = [];

addBtn.addEventListener("click", () => {
  let inputedItemValue = inputedItem.value.trim();
  if (inputedItemValue !== "") {
    itemArray.push(inputedItemValue);
    renderItems();
    inputedItem.value = "";
  }
});

function renderItems() {
  inputedItemContainer.innerHTML = "";
  itemArray.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = item;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    removeBtn.addEventListener("click", () => {
      itemArray.splice(index, 1);
      renderItems();
    });

    li.appendChild(removeBtn);
    inputedItemContainer.appendChild(li);
  });
}
