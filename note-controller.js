// var element = document.getElementById("app");
// element.innerHTML = "yo";

var notelist = new NotesList()

document.getElementById('create_button').onclick = function(){
    const textarea = document.getElementById('note_input');
    
    console.log("first console", notelist)
    
    var controller = new Controller(notelist, textarea.value);
    console.log("second console", notelist)
    var html1 = controller.render();
    var element = document.getElementById("app");
    element.innerHTML = html1
    textarea.value = ""

//     // let note = new Note(textarea.value);
//     // let noteToDisplay = note.htmlToDisplay();

//     // const notesDiv = document.getElementById('notes');
//     // notesDiv.appendChild(noteToDisplay)
//     // textarea.value = '';
};




(function(exports){

    function Controller(notelist, text) {
        this.noteList = notelist;
        this.noteList.create(text)
        var noteListView = new NotesListView(this.noteList);

    Controller.prototype.render = function() {
        return noteListView.view();
      }
    }

    exports.Controller = Controller;
})(this);




// var controller = new Controller(new NotesList());
// var html1 = controller.render();
// var element = document.getElementById("app");
// element.innerHTML = html1