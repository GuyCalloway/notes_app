(function(exports){
    function NotesList() {
            this.noteArray = []
        };

        NotesList.prototype.create = function(text){
          this.noteArray.push(new Note(text));
        }

        NotesList.prototype.list = function() {
            return this.noteArray
        }
        exports.NotesList = NotesList;
})(this);