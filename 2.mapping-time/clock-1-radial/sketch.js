
// //Clock 1

// function setup() {
//   // set the width & height of the sketch
//   createCanvas(400, 400);
//   background("white");
//   angleMode(DEGREES);
//   strokeWeight(30);
//   stroke("orange");
//   strokeCap(ROUND);

//   // print the time to the console once at the beginning of the run. try opening up the
//   // web inspector and poking around to see the various values the clock function gives you
//   //print('starting time:', clock())

//   //setting seconds, minutes, hours variable
//   let sc = seconds();
//   let mn = minutes()
//   let hr = hours()
//   // var w = width;
//   // var h = height;

// }

// function draw() {

//   // check the clock for the current time and unpack some of its fields to generate a time-string
  //var now = clock();

//   // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
//   // note that setting the background also clears the canvas from our previous round of drawing
//   //background('white');

//   var hr = 15;
//   //minAngle is top of the cirlce
//   var minAngle = -90;
//   //maxAnb
//   var maxAngle = 270;

//   var hourAngle = map(hr, 0, 12, minAngle, maxAngle);

//   var size = 300;
//   arc(width/2, height/2, size, size, minAngle, hourAngle)



//   // // set up typography & drawing-color
//   // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
//   // textSize(42) // make it big
//   // fill(100, 50, 50)


//   // // draw the time string to the canvas
//   // text(now.text.date, 30, 50)
//   // text(now.text.time, 30, 100)

// }


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES); // use degrees rather than radians
  strokeWeight(30)
  //stroke('orange')
  strokeCap(ROUND)
  noFill()
}

function draw() {
  background(220);
  var now = clock()
  // define the hour we're drawing an arc for. In your code
  // you should just use now.hour (or now.min or now.sec)
  // but in this example try resetting this value by hand
  //

  var hour = now.hour
  var minutes = now.min
  var seconds = now.sec
  
  // geometrically 0° is considered to mean 'the right side'
  // rather than 'the top' of a circle, so we'll work in the
  // -90 to 270° range rather than 0 to 360°
  var minAngle = -90
  var maxAngle = 270

  // use map to convert our 'hour' variable from the range of 
  // hour values (noon to midnight) into the corresponding 
  // range of angle values defined above
  var hourAngle = map(hour, 0, 23, minAngle, maxAngle)
  var minuteAngle = map(minutes, 0, 59, minAngle, maxAngle)
  var secondAngle = map(seconds, 0, 59, minAngle, maxAngle)

  // draw an arc from the top of the circle (minAngle)
  // to the angle we've calculated for the current hour
  var size = 400
  stroke('orange')
  arc(width/2, height/2, size, size, minAngle, hourAngle)
  stroke('green')
  arc(width/2, height/2, size/1.5, size/1.5, minAngle, minuteAngle)
  stroke('blue')
  arc(width/2, height/2, size/3, size/3, minAngle, secondAngle)

  //time

}