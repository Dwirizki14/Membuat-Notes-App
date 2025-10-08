import notesData from "../data/notes-data.js";
import displayNotes from "./note-list.js";

function initAddNoteForm() {
  const form = document.getElementById("noteForm");
  const titleInput = document.getElementById("noteTitle");
  const bodyInput = document.getElementById("noteBody");
  const submitButton = form.querySelector("button[type='submit']");
  const errorMessage = document.getElementById("errorMessage");

  // === 🔍 FUNGSI VALIDASI REALTIME ===
  function validateForm() {
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
      submitButton.disabled = true;
      errorMessage.textContent = "Judul dan isi catatan wajib diisi!";
      errorMessage.style.display = "block";
    } else {
      submitButton.disabled = false;
      errorMessage.style.display = "none";
    }
  }

  // Jalankan validasi setiap kali user mengetik
  titleInput.addEventListener("input", validateForm);
  bodyInput.addEventListener("input", validateForm);

  // Jalankan validasi awal (agar tombol nonaktif di awal)
  validateForm();

  // === 📝 EVENT SUBMIT FORM ===
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    const newNote = {
      id: `notes-${Date.now()}`,
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    // Tambahkan catatan baru ke data (sementara di memori)
    notesData.unshift(newNote);

    // Perbarui tampilan daftar catatan
    displayNotes();

    // Reset form dan jalankan validasi lagi
    form.reset();
    validateForm();
  });
}

export default initAddNoteForm;
