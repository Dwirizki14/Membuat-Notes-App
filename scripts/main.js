import displayNotes from "./note-list.js";
import initSearchFeature from "./search.js";
import initAddNoteForm from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  displayNotes();
  initSearchFeature();
  initAddNoteForm();
});
