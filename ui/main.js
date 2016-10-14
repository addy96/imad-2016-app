console.log('Loaded!');
alert('welcome to Led zeppelin world, click OK');



 
// The previous line hides the script from 
// old browsers that can't interpret it

// Assuming the image of the up button is called "button1a.gif"
// And that the image of the down button is called "button1b.gif"
// We can now read these two images into variables 
// called button1up and button1down.

button1up = new Image(); //button1up.src = "button1a.gif";
button1down = new Image(); //button1down.src = "button1b.gif";

// Now the two images are defined.

// Next step is the two functions needed.
// The first function is called MouseOverRoutine,
// and causes button1up to shift to button1down.

function MouseOverRoutine(ButtonName)
{
if (ButtonName=="button1") 
{//document.button1.src = button1down.src;
 button1.style.marginDown = '20px';
}
}

// Now our button will shift from button1up to button1down
// when a mouseover event occurs.
// To complete the script all we need to do
// is make the inverse function, that will do exactly the opposite
// when a mouseout event occurs.

function MouseOutRoutine(ButtonName)
{
if (ButtonName=="button1") 
{//document.button1.src = button1up.src;
  button1.style.marginUp = '20px';
    
}
}

// Thats all there is. 
// The final step is ending the script section which is done by two lines:

// The next line causes oldfashion browsers to
// start interpreting the code again.
//-->


