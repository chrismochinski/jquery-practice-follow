console.log('js');

$( document ).ready( readyNow );

function readyNow(){
  console.log( 'JQ' );
  $( '#sayHelloButton' ).on( 'click', sayHello ); //on click of sayHello as its ID, JQuery is going to run this button)
  $( 'h2' ).mouseenter( h2MouseEnter ); //ANY h2 mouse enter it'll run this function...h2MouseEnter, that is
  $( 'h2' ).mouseleave( h2MouseLeave ); // for every h2, the mouse leaving will call the h2MouseLeave function
  $( '.clicker' ).on( 'click', changeTextColor ); //anything with class (.) of 'clicker' ...when clicked, run new function called changeTextColor
  $( '.clickerYellow').on( 'click', changeColor2 );
       //Hey Jquery - get the element that has the id of "sayHellowButton" and, on its click, run the sayHello Function"
} //end readyNow

function changeTextColor(){
  $( this ).css( 'color', 'blue');
} //end changeTextColor function

function changeColor2(){
  $( this ).css( 'font-family', 'helvetica');
  $( this ).css( 'color', 'yellow');
  $( this ).css( 'background-color', 'pink');
}

function h2MouseEnter(){ //turns background red on mouse overflow
  $( this ).css( 'background-color', 'red'); //this is saying "setter of CSS setting background color to red"
  // TRANSLATION:::: for THIS h2 ONLY, set the CSS of this background color to red
} //end h2MouseEnter function

function h2MouseLeave(){ //new function that'll turn it back to white
  $( this ).css( 'background-color', 'white'); //turns color back to "blank" appearance
} //END h2MouseLeave function

//can't fold...wtf???

function sayHello(){
  // target input element by // ID
  // get the value ofthe text input (name, in this case)
  let outputText = 'Hello ' + $( '#nameInput' ).val() // gets the value
  console.log( outputText ); //holds the value in the variable


  //display this on the DOM...
  //target the output elements
  let outputEl = $( '#helloOut' ); //creating variable called outputEl (output element) and assigning it to the ID of helloOut
  //empty the output elements
  outputEl.empty();
  //append the output text int it
  outputEl.append( outputText, ', you big dork!' )
  //empty nameInput below!
  $( '#nameInput').val(''); //sets the value as a blank!
} //end sayHello

//RECAP:::
// "Hey, Jquery - when someone clicks on the element with the ID of sayHelloButton,
// ...", run the sayHello function...the sayHello function creates a new variable
// ..." with the value of the element with the ID of 'nameInput', then we log it out!"
