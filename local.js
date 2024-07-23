localStorage.setItem("mode", "light");



let savedMode = localStorage.getItem("mode");
let change_mode = document.getElementById("change_mode");
change_mode.addEventListener("click", () => {
  if (savedMode === "light") {
    document.body.style.backgroundColor = "teal;";
    localStorage.storage.setItem("mode", "dark");
  } else if (savedMode == "dark") {
    document.body.style.backgroundColor = "green";
    localStorage.storage.setItem("mode", "light");
  }
});
