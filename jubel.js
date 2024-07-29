document.addEventListener("DOMContentLoaded", function () {
  let array = [
    { name: "John", age: 51, nickname: "AHMED", Nationality: "German" },
    { name: "Rick", age: 63, nickname: "Owen", Nationality: "Romanian" },
    { name: "Tartar", age: 22, nickname: "Chicken", Nationality: "Indian" },
    { name: "Pasta", age: 59, nickname: "Pizza", Nationality: "Italian" },
  ];

  let str = "232132";
  console.log(Number(str), "Now I'm a number");

  let input = document.getElementById("searchInput");
  let btn = document.getElementById("btn");
  let list = document.getElementById("ourList");

  let updateDOM = (array) => {
    list.innerHTML = ""; // Clear the existing list
    array.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = `${item.name} - Age: ${item.age}, Nickname: ${item.nickname}, Nationality: ${item.Nationality}`;
      list.appendChild(li);
    });
  };

  btn.addEventListener("click", () => {
    // Get the value of search input
    let searchInput = input.value.toLowerCase();

    // Filter array based on search
    let updatedArray = array.filter((item) => {
      return (
        item.age.toString().includes(searchInput) ||
        item.name.toLowerCase().includes(searchInput) ||
        item.nickname.toLowerCase().includes(searchInput) ||
        item.Nationality.toLowerCase().includes(searchInput)
      );
    });

    // Update the DOM with the filtered array
    updateDOM(updatedArray);
  });

  // Initial render of the full array
  updateDOM(array);
});
