import { getAllProducts, searchProducts } from "./js/api.js";
import { productCardComponent } from "./js/product-card.js";

const productsGrid = document.querySelector(".products-grid");
const queryParams = new URLSearchParams(window.location.search);


async function init() {
  const searchKeywords = queryParams.get("keywords");

  let products = [];

  if (searchKeywords) {
    const data = await searchProducts(searchKeywords);
    products = data.products;
  } else {
    const data = await getAllProducts();
    products = data.products;
  }

  const productCards = products.map((product) => productCardComponent(product));

  productsGrid.replaceChildren(...productCards);
}

init();
