// var element = document.getElementById("app");
// element.innerHTML = "yo";

var notelist = new NotesList()
var element = document.getElementById("app");
element.innerHTML = "<h3><div>No Notes</div></h3>"


document.getElementById('create_button').onclick = function(){
    const textarea = document.getElementById('note_input');

    var controller = new Controller(notelist, textarea.value);   
    var html1 = controller.render();
    var element = document.getElementById("app");
    element.innerHTML = html1
    element.href = 
    textarea.value = ""

//     // let note = new Note(textarea.value);
//     // let noteToDisplay = note.htmlToDisplay();

//     // const notesDiv = document.getElementById('notes');
//     // notesDiv.appendChild(noteToDisplay)
//     // textarea.value = '';
};


document.getElementById('starred').onclick = function(){
    const textarea = document.getElementById('note_input');
    const numb = document.getElementById('no_input')
    console.log(numb)
    var integer = (parseInt(numb.value, 10) - 1);
    console.log(integer)
    var controller = new Controller(notelist, textarea.value);   
    var html1 = controller.reorder(integer);
    var element = document.getElementById("app");
    element.innerHTML = html1
    textarea.value = ""
    appendAnchorTag(integer);


};


(function(exports){

    function Controller(notelist, text) {
        this.noteList = notelist;
        this._count = 0
        
    Controller.prototype.render = function() {
        this.noteList.create(text)
        this._count ++
        var noteListView = new NotesListView(this.noteList);
        return noteListView.view();
      }

  
    Controller.prototype.reorder = function(id) {
        var starredItem = (this.noteList.noteArray.splice(id, 1))
        console.log(starredItem)
        this.noteList.noteArray.unshift(starredItem[0])
        console.log(this.noteList.noteArray)
        var noteListView = new NotesListView(this.noteList);
        return noteListView.view();
      }
    }

    exports.Controller = Controller;
})(this);



const insertButton = document.getElementById('starred');

const appendAnchorTag = function(x){
  const anchor = document.createElement('a');
  const list = document.getElementById('linksList');
  const li = document.createElement('li')

  var x = notelist.noteArray[x].text
  y = x.split(" ")
  var query = y.join('+')
  anchor.href = 'http://google.com/search?q='+query+'+stack+overflow';
  anchor.innerText = 'Google it';
  li.appendChild(anchor);
  list.appendChild(li);
};




// var controller = new Controller(new NotesList());
// var html1 = controller.render();
// var element = document.getElementById("app");
// element.innerHTML = html1