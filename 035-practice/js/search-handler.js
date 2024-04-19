function initSearchHandler() {
  const queryParams = new URLSearchParams(window.location.search);
  const keywords = queryParams.get("keywords");
  const searchField = document.querySelector('input[name="searchProductKey"]');
  searchField.value = keywords;

  document.querySelector("#search-btn").addEventListener("click", () => {
    window.location = `/?keywords=${searchField.value}`;
  });
}

initSearchHandler();
