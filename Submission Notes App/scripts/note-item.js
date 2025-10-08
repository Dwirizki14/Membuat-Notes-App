function createNoteItem(note) {
  return `
    <article class="note-item">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-body">${note.body}</p>
      <p class="note-date">${new Date(note.createdAt).toDateString()}</p>
    </article>
  `;
}

export default createNoteItem;
