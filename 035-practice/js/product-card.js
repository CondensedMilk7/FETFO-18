export function productCardComponent(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${data.thumbnail}" class="card-img-top" alt="${data.title}" />
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.price.current} ${data.price.currency}</p>
    <p class="card-text">${data.description}</p>
    <a href="/product/?id=${data._id}" class="btn btn-primary">Details</a>
  </div>
  `;
  return card;
}
