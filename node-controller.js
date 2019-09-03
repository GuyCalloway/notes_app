import { NotesList } from "./note-list-model";
import { NotesListView } from "./note-list-view";

// console.log(document.getElementById("app"))


(function(exports){

    function Controller() {

        this.noteList = new NotesList();
        this.noteList.create("Favourite drink: seltzer");
        this.noteList.create("goodbye");
        this.viewer = new NotesListView(this.noteList);

    };


    Controller.prototype.viewer = function() {
        document.getElementById("app").innerHTML = this.viewer.view();

    }

    exports.Controller = Controller;
})(this);

var controller1 = new Controller();
controller1.viewer();