const showProducts = (products) => {
  console.log(products, "show the product");
  //loop through product use forEach
  // inside forEach create tr
  // now create td
  // then we create td
  // give td correct content
  // add the td to the tr
  // add the tr to table
};

const fetchProductData = async () => {
  // user tries to catch fetch data
  try {
    // try will wait for fetch request
    let response = await fetch("https://fakestoreapi.com/products");
    //converting resonse to json
    let data = await response.json();
    //send data that i received to function called showProducts
    showproducts(data);
    //showProducts is function that will print data to html
  } catch (error) {}
  console.log(error);
};
