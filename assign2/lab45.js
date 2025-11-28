const products = [];
const addProduct = (product) => products.push(product);
const changePrice = (changedPrice, productIndex) => (products[productIndex].price = changedPrice);
const showArray = (array) => array.forEach((item, index) => console.log(`index: ${index} | item`, item));
const showAllProductsName = (products) => products.forEach((product, index) => console.log(`name ${index}: ${product.name ?? ""}`));
const convertToProductPrices = (products) => products.map((product) => product.price);
const filterOnStockProducts = (products) => products.filter((product) => product.inStock);
const forIn = (product) => {
  for (let key in product) {
    console.log(key, product[key]);
  }
};
const pro1 = {
  name: "T-shirt",
  price: 200,
  inStock: false,
};

const pro2 = {
  name: "Jean",
  price: 300,
  inStock: true,
};

const pro3 = {
  name: "Jacket",
  price: 500,
  inStock: true,
};

const pro4 = {
  name: "rain gear",
  price: 100,
  inStock: false,
};

const pro5 = {
  name: "umbrella",
  price: 50,
  inStock: true,
};

addProduct(pro1);
addProduct(pro2);
addProduct(pro3);
addProduct(pro4);
addProduct(pro5);

// task 1:
console.log(products[0].name);

// task 2:
changePrice(10000000, 1);
showArray(products);

// task 3:
products.pop();
showArray(products);

// task 4:
showAllProductsName(products);

// task 5
const allPrices = convertToProductPrices(products);
showArray(allPrices);

// task 6
const productsOnStock = filterOnStockProducts(products);
showArray(productsOnStock);

// task 7
forIn(products[0]);
