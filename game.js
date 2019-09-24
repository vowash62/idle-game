var score = 1; // Create a variable to store the score in

var title = new Title('court 101'); // Create a title element
var button = new Button('score', btnPress);   // Create a button element
var hidden = new Button('leval!');

var scr = new Text(score); // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 100) {
    hidden.show();
  }
  if(score > 100) {
    hidden.hide(500);
  }
}
