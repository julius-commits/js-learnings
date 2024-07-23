/* let list = document.getElementById("poke-list");
window.onload = () => {
  let data = fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results, "Pokemon list");
      res.results.forEach((poke) => {
        let li = document.createElement("li");
        li.textContent = poke.name;
        list.appendChild(li);
      });
    });
};

li.addEventListener("click", () => {
  fetch("poke.url")
    .then((res) => res.json())
    .then((res) => {});
  console.log(res.results);
}); */
let fetchUrl = async (url) => {
  try {
    let.pokPromise = await fetch(url).then((res) => {
      return res.json();
    });
    return pokPromise;
  } catch (error) {
    return error;
  }
};

let list = document.getElementById("poke-list");

let fetchPok = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((pok) => {
        let img = document.createElement("img");
        fetchUrl(pok.url).then((res) => {
          img.src = res.sprites.front_default;
        });

        let li = document.createElement("li");
        li.textContent = pok.name;
        list.appendChild(li);
        li.appendChild(img);
        li.addEventListener("click", () => {
          console.log(pok);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching Pokemon:", error);
    });
};

window.onload = fetchPok;
