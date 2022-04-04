var input,heading;
var output;

function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  input = createInput()
  input.position(20,70)
  heading = createElement("h1", "enter any alphabet")
  heading.position (20,0)
  output = createElement("h3")
  output.position (20,110)
}


function draw() {
const value = input.value()
switch (value) {
  case "a": output.html ("it's a vowel"); break;
  case "e": output.html ("it's a vowel"); break;
  case "i": output.html ("it's a vowel"); break;
  case "o": output.html ("it's a vowel"); break;
  case "u": output.html ("it's a vowel"); break;
  case "": output.html ("insert something"); break; 
  default : output.html ("it's a consonant. please enter any other character"); break;
}
  
}

