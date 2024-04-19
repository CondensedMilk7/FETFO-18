const PRODUCTS_BASE_URL = "https://api.everrest.educata.dev/shop/products";

export async function getAllProducts(pageSize = 10, pageIndex = 1) {
  return fetch(
    `${PRODUCTS_BASE_URL}/all?page_size=${pageSize}&page_index=${pageIndex}`,
  ).then((res) => res.json());
}

export async function searchProducts(keywords, pageSize = 10, pageIndex = 1) {
  return fetch(
    `${PRODUCTS_BASE_URL}/search?page_size=${pageSize}&page_index=${pageIndex}&keywords=${keywords}`,
  ).then((res) => res.json());
}
