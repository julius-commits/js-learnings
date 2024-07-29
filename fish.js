let table = document.getElementById("product-table");
let btn_new_product = document.getElementById("new-project");
let url = "https://fakestoreapi.com/products";
let addNewProduct = async () => {
  //prepare data of new product
  let newProduct = {
    tite: "new product",
    price: 5035,
    category: "women",
    description: "test",
  };
  // new fetch
  // in fetch specify method of the request
  // and data you want to send
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newProduct),
  });
  console.log(response);
};
btn_new_product.addEventListener("click", () => {
  addNewProduct();
});

const showProducts = (products) => {
  console.log(products, "show the product");
  //loop through product use forEach
  products.forEach((item) => {
    console.log(item);
    let { image, price, category, title, description, id } = item;

    // inside forEach create tr
    let tr = document.createElement("tr");
    // now create td
    let tdId = document.createElement("td");
    // give td correct content
    tdId.textContent = id;
    // add the td to the tr
    tr.appendChild(tdId);
    //create image
    let tdImage = document.createElement("td");
    let img = document.createElement("img");
    img.src = image;
    img.style.width = "70px";

    tdImage.appendChild(img);
    tr.appendChild(tdImage);
    // add the tr to table
    table.appendChild(tr);

    let tdPrice = document.createElement("td");
    tdPrice.textContent = price;
    tr.appendChild(tdPrice);

    let tdDescription = document.createElement("td");
    tdDescription.textContent = description;
    tr.appendChild(tdDescription);

    let tdCategory = document.createElement("td");
    tdCategory.textContent = category;
    tr.appendChild(tdCategory);

    let tdTitle = document.createElement("td");
    tdTitle.textContent = title;
    tr.appendChild(tdTitle);
  });
};

const fetchProductData = async () => {
  // user tries to catch fetch data
  try {
    // try will wait for fetch request
    let response = await fetch(url);

    //converting resonse to json
    let data = await response.json();
    //send data that i received to function called showProducts
    showProducts(data);
    //showProducts is function that will print data to html
  } catch (error) {}
  console.log("NOT WORKING");
};
fetchProductData();
