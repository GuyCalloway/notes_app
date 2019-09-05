// var element = document.getElementById("app");
// element.innerHTML = "yo";

var notelist = new NotesList()
var element = document.getElementById("app");
element.innerHTML = "<h3><div>No Notes</div></h3>"

document.getElementById('create_button').onclick = function(){
    const textarea = document.getElementById('note_input');

    var controller = new Controller(notelist, textarea.value);   
    var html1 = controller.render();
    console.log(html1)
    var element = document.getElementById("app");
    element.innerHTML = html1
    textarea.value = ""

//     // let note = new Note(textarea.value);
//     // let noteToDisplay = note.htmlToDisplay();

//     // const notesDiv = document.getElementById('notes');
//     // notesDiv.appendChild(noteToDisplay)
//     // textarea.value = '';
};


document.getElementById('important').onclick = function(){
    const textarea = document.getElementById('note_input');
    var controller = new Controller(notelist, textarea.value);   
    var html1 = controller.render();
    console.log(html1)
    var element = document.getElementById("app");
    element.innerHTML = html1
    textarea.value = ""


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