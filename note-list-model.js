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

      //   NotesList.prototype.reOrder = function() {
      //      this.noteArray.pop
      //      this.n
      // }
        exports.NotesList = NotesList;
})(this);