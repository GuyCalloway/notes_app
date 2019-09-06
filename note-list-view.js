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
            var liTag = document.createElement("li");
            
            liTag.innerText = noteObject.text;
            return liTag;
        })

        var ulTag = document.createElement("ol").type = "1";
        console.log(ulTag)
        content = content.reduce((a, b) => a + b.outerHTML, "");
        return ulTag.innerText = content
    
    };

    exports.NotesListView = NotesListView;
})(this);

