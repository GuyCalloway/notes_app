(function(exports){
    function NotesListView(notelist) {
            this.notelist = notelist
        };

        NotesListView.prototype.view = function(){
         var start = "<ul>"
         var end = "</ul>" 
         if (this.notelist.noteArray.length == 0) {
             return "<div><li>No Notes</li></div>";
         } else {
         var content = this.notelist.noteArray.map(function(note){return "<li><div>" + note.text + "</div></li>"});
          console.log(content)
         content = content.reduce((a, b) => a + b, "");
        
         return (start + content + end);
         }
        };

        exports.NotesListView = NotesListView;
    })(this);