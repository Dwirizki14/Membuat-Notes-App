import notesData from "../data/notes-data.js";
import displayNotes from "./note-list.js";

function initSearchFeature() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = notesData.filter(
      (note) =>
        note.title.toLowerCase().includes(keyword) ||
        note.body.toLowerCase().includes(keyword)
    );
    displayNotes(filtered);
  });
}

export default initSearchFeature;
