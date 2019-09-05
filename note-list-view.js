(function(exports){

    function NotesListView(notelist) {
        this.notelist = notelist
    };

    NotesListView.prototype.view = function(){
    
        var noteArray = this.notelist.noteArray

        var filteredArray = noteArray.filter(function (noteObject) {
        return noteObject.text != "";
        });
        
       
        var content = filteredArray.map(function(noteObject){
            var liTag = document.createElement("div");
            var divTag = document.createElement("li");
            divTag.innerText = noteObject.text;
            liTag.appendChild(divTag);
            return liTag;
        })

        var ulTag = document.createElement("ul")
        content = content.reduce((a, b) => a + b.outerHTML, "");
        return ulTag.innerText = content
    
    };

    exports.NotesListView = NotesListView;
})(this);

