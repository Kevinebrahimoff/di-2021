//Clock 2
// function setup() {
//   createCanvas(500, 500);
//   angleMode(DEGREES); // use degrees rather than radians
//   rectMode(CENTER);
//   noStroke()
// }
//   // pointAt(cx, cy, angle, dist){
//   // var thera = angle/360 * TWO_PI
//   // return { x: cx+cos(theta) * dist, 
//   //   y: cy+sin(theta) * dist


// function draw() {
//   background(50);

  
//   var now = clock;
  
  

//   var o = (width/2, height/2);

//   fill(255);
//   circle(o, o, 10);

// //hour
//   fill(255, 204, 0 ,90);
//   rect(o, o, 30,30)

// //minutes
//   fill(0, 255, 30 ,90);
//   rect(o, o, 60,60)

//   //seconds
//   fill(0, 204, 255 ,90);
//   rect(o, o, 10,10)

//   }
  

  function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}


function setup() {
  createCanvas(500, 500);
  background(50)
  rectMode(CENTER)
  //angleMode(DEGREES)
  noStroke()

//location
  var hour = 7
  var minutes = 45
  var seconds = 26
  
  // geometrically 0° is considered to mean 'the right side'
  // rather than 'the top' of a circle, so we'll work in the
  // -90 to 270° range rather than 0 to 360°
  var minAngle = -90
  var maxAngle = 270

  // use map to convert our 'hour' variable from the range of 
  // hour values (noon to midnight) into the corresponding 
  // range of angle values defined above
  var hourAngle = map(hour, 0, 11, minAngle, maxAngle)
  var minuteAngle = map(minutes, 0, 59, minAngle, maxAngle)
  var secondAngle = map(seconds, 0, 59, minAngle, maxAngle)


  // //location of squares
  // var orangeAngle = 180
  // var greenAngle = 135
  // var blueAngle = -90



  var mid = (width/2, height/2);
  
  // draw a white circle in the center; this marks
  // other points on the basis of
  circle(mid, mid, 5)
  
  // find a new point thats at 0° (i.e., to the right) 
  // of the original (starting from x=200 y=100)
  // and is 120 pixels away it
  var hourPt = pointAt(mid, mid, hourAngle, 120)

  // find a point that's clockwise by 135° (i.e., down and left) 
  // from the original (again, starting at x=200 y=100)
  // but is closer this time (only 60 pixels away)
  var minutePt = pointAt(mid, mid, minuteAngle, 100)
  
  // by passing a negative number for the angle we can
  // find a point that's 90° counter-clockwise
  var secondPt = pointAt(mid, mid, secondAngle, 60)
    
  // draw a red circle at the first calculated point
  //hour
  fill(255, 204, 0 ,90)

  rect(hourPt.x, hourPt.y,50, 50)
  
  // draw an orange circle at the second point
  //minutes
  fill(0, 255, 30 ,90)
  rect(minutePt.x, minutePt.y, 70, 70)
  
  // draw a yellow circle at the counterclockwise point
  //seconds
  fill(0, 204, 255 ,90)
  rect(secondPt.x, secondPt.y, 30, 30)
  
  // draw a line from the origin to each dot
  stroke(255, 50)
  line(mid,mid, hourPt.x, hourPt.y)
  line(mid,mid, minutePt.x, minutePt.y)
  line(mid,mid, secondPt.x, secondPt.y)
}

