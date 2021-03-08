function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); // use degrees rather than radians
  strokeWeight(20)
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

  // let d = now.day

  var hour = now.hour
  var minutes = now.min
  var seconds = now.sec
  var day = now.day
  var month = now.month
  // var timeStamp = now.timestamp
  
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
  var dayAngle = map(day, 0, 31, minAngle, maxAngle)
  var monthAngle = map(month, 0, 12, minAngle, maxAngle)

print(now.text.day)
print(now.text.month)

  // draw an arc from the top of the circle (minAngle)
  // to the angle we've calculated for the current hour
  var size = 500
  noFill()
  stroke('red')
  // lerpColor
  arc(width/2, height/2, size, size, minAngle, monthAngle)
  stroke('yellow')
  arc(width/2, height/2, 400, 400, minAngle, dayAngle)
  stroke('orange')
  arc(width/2, height/2, 300, 300, minAngle, hourAngle)
  stroke('green')
  arc(width/2, height/2, 200, 200, minAngle, minuteAngle)
  stroke('blue')
  arc(width/2, height/2, 100, 100, minAngle, secondAngle)

  //time

}