/*
🚀 Question 24:  Build a simple notes app using localStorage

  
*/
const notesCollector = document.querySelector(".notesCollection");
const addNoteBtn = document.querySelector(".addNoteBtn");
const userNote = document.querySelector("textarea");
const cancelBtn = document.querySelector(".cancelBtn");
const noteDltBtn = document.querySelector(".deleteBtn");
const noteEditBtn = document.querySelector(".editBtn");
let editIndex = null;
const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
userNote.focus();

renderNotesOnUI(allNotes);

addNoteBtn.addEventListener("click", createNote);
function createNote() {
  userNote.focus();

  if (!userNote.value.trim()) {
    return;
  }
  if (editIndex === null) {
    let note = { note: userNote.value.trim() };
    allNotes.push(note);
  } else {
    allNotes[editIndex].note = userNote.value.trim();
    editIndex = null;
  }
  localStorage.setItem("notes", JSON.stringify(allNotes));
  userNote.value = "";
  renderNotesOnUI(allNotes);
}
function renderNotesOnUI(arrOfNotes) {
  notesCollector.innerHTML = "";
  arrOfNotes.forEach((item, ind) => {
    notesCollector.innerHTML += `
          <div class="note">
            <h3>Note ${ind + 1}</h3>
            <p>${item.note}
            </p>
            <div class="noteBtn">
              <button class="editBtn" onclick='editTheNote(${ind})'>Edit</button>
              <button class="deleteBtn" onclick='deleteTheNote(${ind})'>Delete</button>
            </div>
          </div>`;
  });
}

cancelBtn.addEventListener("click", () => {
  userNote.value = "";
  userNote.focus();
  editIndex = null;
});

function deleteTheNote(i) {
  allNotes.splice(i, 1);
  localStorage.setItem("notes", JSON.stringify(allNotes));
  renderNotesOnUI(allNotes);
}
function editTheNote(i) {
  editIndex = i;
  console.log(editIndex);
  userNote.focus();
  userNote.value = allNotes[i].note;
}
