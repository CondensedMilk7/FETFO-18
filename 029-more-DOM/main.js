// const heading = document.querySelector("h1");
// heading.innerHTML = "<i>TO DO</i> APP";
// console.log(heading);

// heading.addEventListener('click', () => {
//   heading.style.backgroundColor = 'blue';
// });
const todoContainer = document.querySelector("#todo-container");
const addButton = document.querySelector("#add-button");
const alertContainer = document.querySelector("#alert");

addButton.addEventListener("click", handleAdd);

function handleAdd() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  if (title.value && description.value) {
    alertContainer.innerHTML = "";

    const card = createCard(title.value, description.value, Date.now());
    todoContainer.appendChild(card);

    title.value = "";
    description.value = "";
  } else {
    const alert = createAlert("Fill in the fields!", "danger");
    alertContainer.replaceChildren(alert);
  }
}

function createCard(title, description, id) {
  const div = document.createElement("div");
  div.classList.add("mt-4");
  div.setAttribute('id', id);

  div.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <button class="btn btn-danger" onclick="deleteCard(${id})">Delete</button>
      </div>
    </div>
  `;

  // ერთი არც ისე გადასარევი გზა:
  // div.querySelector(".btn").addEventListener("click", (event) => {
  //   const cardToDelete = event.target.parentNode.parentNode.parentNode;
  //   cardToDelete.remove();
  // });

  return div;
}

function createAlert(message, type) {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert", "mt-4", `alert-${type}`);
  return alert;
}

function deleteCard(id) {
  const cardToDelete = document.getElementById(id);
  cardToDelete.remove();
}
