const input = document.querySelector("input");
const messages = document.querySelector(".messages");
input.addEventListener("input", handleInput);

function handleInput() {
  messages.innerHTML = "";
  const value = input.value;

  if (/cat/gi.test(value)) {
    showMessage("Includes cat 😺");
  }

  // character set []
  if (/[კშხტზ]არი/gi.test(value)) {
    showMessage("რაღაცა ირითმება კარზე :/");
  }

  if (/[^გ]ზა/gi.test(value)) {
    showMessage("არ არის 'გზა'");
  }

  if (/[a-zA-Z]ear/g.test(value)) {
    showMessage("🟢 [a-z]ear");
  }

  if (/\d{2}-\d{2}-\d{4}/g.test(value)) {
    showMessage("🟢 Contains date string!");
  }

  if (/^\d{2}-\d{2}-\d{4}$/g.test(value)) {
    showMessage("🟢 Just date string!");
  }
}

function showMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  messages.appendChild(div);
}
