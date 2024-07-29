let todo = [
  { name: "clean your room", id: 4712366, selected: false },
  { name: "do missions", id: 47164366, selected: false },
];

let addBtn = document.getElementById("add");
let inputedItem = document.getElementById("input-text");
let list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (inputedItem.value.trim()) {
    todo.push({ name: inputedItem.value, id: Date.now(), selected: false });
    inputedItem.value = "";
    displayTodo();
  }
});

let displayTodo = () => {
  list.innerHTML = "";
  todo.forEach((task) => {
    let li = document.createElement("li");
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", () => {
      todo = todo.filter((item) => item.id !== task.id);
      displayTodo();
    });

    li.textContent = task.name;
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
};

displayTodo();
