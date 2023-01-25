const addButton = document.getElementById("add-button");
const noteInput = document.getElementById("note");
const notesContainer = document.getElementById("notes-container");

addButton.addEventListener("click", () => {
  const note = noteInput.value;
  if (note) {
    const noteElement = document.createElement("p");
    noteElement.innerText = note;
    notesContainer.appendChild(noteElement);
    noteInput.value = "";
  }
});