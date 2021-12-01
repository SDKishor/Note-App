const addNotepadBtnEl = document.getElementById("addNotepadBtn");
const main_containerEl = document.getElementById("main_container");

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes) {
    notes.forEach(note =>{
        addNewNote(note)
    })
}





addNotepadBtnEl.addEventListener("click", () => {
    addNewNote();
})


function addNewNote(text = ""){
    const note = document.createElement("div");
    note.classList.add("note");

    

    note.innerHTML = `
        <div id="toolbar" class="toolbar">
                <i id="editBtn" class="fas fa-plus"></i>
                <i id="paletteBtn" class="fas fa-palette"></i>
                <i id="deletBtn" class="fas fa-times"></i>
            </div>
            <div class="noteField ">
                <div id="inputNote" class="noteTextInput ">
                    <textarea id="textarea"></textarea>
                    <button id="saveBtn">Save</button>
                </div>
                <div id="displayText" class="noteText hidden">
                </div>
            </div>
    `;

    main_containerEl.appendChild(note);
    

    
    
const editBtnEl = note.querySelector("#editBtn");
const paletteBtnEl = note.querySelector("#paletteBtn");
const deletBtnEl = note.querySelector("#deletBtn");
const saveBtnEl = note.querySelector("#saveBtn");

const toolbarEl = note.querySelector("#toolbar");
const displayTextEl = note.querySelector("#displayText");
const inputNoteEl = note.querySelector("#inputNote");
const textareaEl = note.querySelector("#textarea");
textareaEl.value = text;

editBtnEl.addEventListener("click",() => {
    displayTextEl.classList.toggle("hidden");
    inputNoteEl.classList.toggle("hidden");
})

saveBtnEl.addEventListener("click",() => {
    displayTextEl.classList.toggle("hidden");
    inputNoteEl.classList.toggle("hidden");
})

deletBtnEl.addEventListener("click", () => {
    note.remove();
})

textareaEl.addEventListener("input", (e) => {
    const { value } = e.target;
    displayTextEl.innerHTML = value;

    updateLS();
})
paletteBtnEl.addEventListener("click",() => {
    changeToolbarcolor();
})
changeToolbarcolor()

function changeToolbarcolor(){
    let random = Math.floor( Math.random() * 350 + 1)
    toolbarEl.style.backgroundColor = `hsla(${random}, 87%, 71%, 0.7)`;
}

}

function updateLS(){
    const notestext = document.querySelectorAll("#textarea");
    const notes = [];

    notestext.forEach(note =>{
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

