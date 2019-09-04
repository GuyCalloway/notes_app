var counter = 0;

(function(exports) {  

  function testNote() {
      var note = new Note("My favourite language is Javascript");
      assert.isTrue(note.text === "My favourite language is Javascript");
  };

  exports.testNote = testNote;
  
})(this);


(function(exports) {

  function testNotesCreate() {
    var notesList = new NotesList();
    notesList.create("text1")
    notesList.create("text2")
    assert.isTrue((notesList.list()[0].text === "text1") && 
    (notesList.list()[1].text === "text2"))
};

  exports.testNotesCreate = testNotesCreate;
})(this);

(function(exports) {

  function testNotesView() {
    var notesList = new NotesList();
    var testString = "<ul><li><div>text1</div></li><li><div>text2</div></li></ul>"
    notesList.create("text1");
    notesList.create("text2");
    notesView = new NotesListView(notesList);
    assert.isTrue(notesView.view() === testString);
  
  }


  function testNotesView() {
    var notesList = new NotesList();
    // notesList.create("text1");
    // notesList.create("text2");
    notesView = new NotesListView(notesList);
    assert.isTrue(notesView.view() == "<div><li>No Notes</li></div>");
  
  }

  exports.testNotesView = testNotesView;
})(this);

counter ++
testNote();
counter ++
testNotesCreate();
counter ++
testNotesView();

