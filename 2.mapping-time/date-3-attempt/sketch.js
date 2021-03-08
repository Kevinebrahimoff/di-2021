//CLOCK 3 
  function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}
function setup() {
  // set the width & height of the sketch
  createCanvas(500,500)
  rectMode(CENTER)


  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {

  background(50)
    noStroke()
  var now = clock()

   var hour = now.hour
  var minutes = now.min
  var seconds = now.sec
  var month = now.month
  // // check the clock for the current time and unpack some of its fields to generate a time-string
  // var now = clock()

  // // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // // note that setting the background also clears the canvas from our previous round of drawing
  // background('white')

  // // set up typography & drawing-color
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(42) // make it big
  // fill(100, 50, 50)

  // // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)

  
  
  var minAngle = -90
  var maxAngle = 270

  var mid = (width/2, height/2)

  var minuteAngle = map(minutes, 0, 59, minAngle, maxAngle)
  var minutePt = pointAt(mid, mid, minuteAngle, 60)

  var secondAngle = map(seconds, 0, 59, minAngle, maxAngle)
  var secondPt = pointAt(mid, mid, secondAngle, 60)



  var hourAngle = map(hour, 0, 23, minAngle, maxAngle)
  var minuteAngle = map(minutes, 0, 59, minAngle, maxAngle)
  var secondAngle = map(seconds, 0, 59, minAngle, maxAngle)

  //Hours
  fill(255, 204, 0 ,90)
  noStroke()
  rect(mid, mid, 80, 80)
  //rotate(45)

  //Minutes
  fill(0, 255, 30 ,90)
  stroke(0, 204, 255 ,90)
  strokeWeight(5)
  line(mid, mid, minutePt.x, minutePt.y)


}