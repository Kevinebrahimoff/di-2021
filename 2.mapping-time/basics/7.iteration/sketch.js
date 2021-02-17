/*
   Iteration with a "for" loop to construct repetitive forms.

   loop syntax works like this:
     for(initialize; test; update){
       ... loop body (i.e., the steps to be repeated)
     }
     ... rest of program

   the basic flow of this kind of loop is:
     1. do the 'initialize' operation
     2. is 'test' true? YES: execute the statements in the 'body' of the loop
                        NO: 'break' from looping and move on to the rest of the program
     3. do the 'update' operation
     4. go to step 2

   Updating a variable by modifying its existing value is extremely common when looping.
   Some convenient shorthands for this include:
     x++     is equivalent to:  x = x + 1
     x--     is equivalent to:  x = x - 1
     x += a  is equivalent to:  x = x + a
     x -= b  is equivalent to:  x = x + b
     x *= c  is equivalent to:  x = x * c
     x /= c  is equivalent to:  x = x / c
*/

var y;
var num = 14;

function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();

  var spacing = 60
  var radius = 30

  push()

  fill('red')
  translate(100, 50)
  circle(0, 0*spacing, radius)
  circle(0, 1*spacing, radius)
  circle(0, 2*spacing, radius)
  circle(0, 3*spacing, radius)
  circle(0, 4*spacing, radius)
  circle(0, 5*spacing, radius)

  fill('orange')
  translate(125, 0)
  for (var i=0; i<6; i++){
    circle(0, i*spacing, radius)
  }

  fill('yellow')
  translate(125, 0)
  for (var y=0; y<6*spacing; y+=spacing){
    circle(0, y, radius)
  }

  fill('limegreen')
  translate(125, 0)
  // less common way to loop short hands, BUT a little less complicated
  // using the _. or lodash. library
  //with times you tell it how many times you go through, then you use the special syntax that follows in the {} brackets
  //the => creates a standalone functions within
  _.times(6, i => {
    circle(0, i*spacing, radius)
  })

  pop()

//collection value
//collect data using arrays
  translate(100, 400)
  //creates and array (using the [] brackets) and brings it into a variable
  //arrays are handy because the arrray itself is an object that knows how to loop over itself––it can contain data and can access it
  var xPositions = [0, 5, 10, 20, 40, 80, 160, 320, 640]
    //(x,y) x = order value, y = actual value
  xPositions.forEach( (x, i) => {
    stroke(255 - 30*i)
    line(x, 0, x, 150)
  })

}
