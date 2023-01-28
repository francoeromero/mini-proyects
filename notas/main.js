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
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.style.height = "20px";
    checkbox.style.scale = "1.8";
    checkbox.style.margin = "15px";
   
    noteElement.appendChild(checkbox);
    noteElement.appendChild(document.createTextNode(note));
    notesContainer.appendChild(noteElement);

    noteElement.style.padding = "10px";
    noteElement.style.display = "flex";
    noteElement.style.flexDirection = "column";
   
    notesContainer.style.transition = "1s";
    noteInput.value = "";

    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        
        noteElement.classList.add("completed");
      } else {
        noteElement.classList.remove("completed");
      }
    });
  }
}