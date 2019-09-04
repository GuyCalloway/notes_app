// when user clics the save button get text from text area
// creat a note with that text get the HTM display for that note
// add it to page

document.getElementById("create_button").onclick = function(){
    var text = document.getElementById('note_input').value;
    var note = new Note(text);
    var textarea = document.getElementById('note_input');
    var htmlToDisplay = note.htmlToDisplay();

    
    console.log(htmlToDisplay)
    // find the place to add it (the parent)
    document.getElementById('notes');
    var notesDiv = document.getElementById('notes');
  
    // append it
      notesDive.appendChild(htmlToDisplay)
    // remove it from text area
    textarea.value = "";
}
// alert is pop up