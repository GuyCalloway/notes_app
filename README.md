**Code is in a file called note-model.js.
**Code is wrapped in the module pattern.
**Uses the constructor and prototype pattern to define a note model object that can be instantiated.
**Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
**Stores the text in a text property on the note.
**Has a method that will return the note text.

DIAGRAM:
*Create a note*

---->Add text ----->  Stored/displayed on screen
+text field avail           +
+submit/save ------> input from HTML text area

             ------> 

click SAVE ---> shouldnt save anything in HTML...if shorten or change will be lost (this can be cirucmnaviaged by storing the whole thing but hidden in the HTML)

save separate model
<div class="note">
  text(20)
</div>



Want a final product that saves client side so can update and add without having to call the server, then updates database through API request that saves it longer term(saves in database sends back JSON)