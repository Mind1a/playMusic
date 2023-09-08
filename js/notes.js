function drawNotes() {
  let html = "";
  let gap = 300;
  let i = 2 * gap;
  let padding = 10;
  const notes = ["&#9833;", "&#9834;", "&#9835;", "&#9836;"];
  while (i < body.offsetHeight) {
    const randomNote = Math.floor(Math.random() * notes.length);
    if (i % (2 * gap)) {
      html += `<li class="note" style="top: ${
        i - gap
      }px; right:${padding}px; animation-delay: ${i}ms" >${
        notes[randomNote]
      }</li>`;
    } else {
      html += `<li class="note" style="top: ${
        i - gap
      }px; left:${padding}px; animation-delay: ${i}ms" >${
        notes[randomNote]
      }</li>`;
    }

    i += gap;
  }
  noteContainer.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  drawNotes();
});
