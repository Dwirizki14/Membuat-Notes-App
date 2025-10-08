import createNoteItem from "./note-item.js";
import notesData from "../data/notes-data.js";

function displayNotes(filteredNotes = notesData) {
  const listContainer = document.getElementById("noteList");
  if (filteredNotes.length === 0) {
    listContainer.innerHTML = `<p class="no-result">💭 No notes found. Try a different keyword!</p>`;
    return;
  }
  listContainer.innerHTML = filteredNotes
    .map((note) => createNoteItem(note))
    .join("");
}

export default displayNotes;
