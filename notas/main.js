const addButton = document.getElementById("add-button");
const noteInput = document.getElementById("note");
const notesContainer = document.getElementById("notes-container");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Agregar evento de click al botón "Agregar"
addButton.addEventListener("click", addNote);

// Agregar evento de keypress al input de notas
noteInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    addNote();
  }
});

function addNote() {
  const note = noteInput.value;
  if (note) {
    const noteElement = document.createElement("p");
    noteElement.innerText = note;
    notesContainer.appendChild(noteElement);
    noteInput.value = "";
  }
}