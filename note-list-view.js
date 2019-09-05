(function(exports){
    function NotesListView(notelist) {
            this.notelist = notelist
        };

        NotesListView.prototype.view = function(){
         var start = "<ul>"
         var end = "</ul>" 
         var noteArray = this.notelist.noteArray

         var filtered = noteArray.filter(function (el) {
            return el.text != "";
          });
          console.log(filtered)
         if (noteArray.length == 0) {
             return "<div><li>No Notes</li></div>";
         } else {
         var content = filtered.map(function(note){
             return "<li><div>" + note.text + "</div></li>"});

         content = content.reduce((a, b) => a + b, "");
        
         return (start + content + end);
         }
        };

        exports.NotesListView = NotesListView;
    })(this);