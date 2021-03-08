//final
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 800)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var hour = now.hour
  var minutes = now.minute
  var seconds = now.sec

  

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background(99, 19, 23)
  noStroke()
  fill(0)

rectMode(CENTER)
translate(66.6668/2,66.6668/2)

var eqaulSpacing = 66.6668
    // choose the spacing parameters for the grid
  var colSpacing = eqaulSpacing
  var rowSpacing = eqaulSpacing
  //how big each dot should be
  var cellRadius = 44.4445

  //60 seconds
  var totalCells = 60

  var numColumns = 5

   //keeps number constant
  //floor (rounds down) and ceil (rounds up)
  //round (rounds to nearest 1)
  var numRows = ceil(totalCells/numColumns)
  
  //loop inside loop
  //first loops runs

  
  //'numRow' is how manytimes over the loop repeats
  _.times(numRows, r => {
      //r = 0
   

    //'numColumns' is how manytimes over the loop repeats
    _.times(numColumns, c => {
      //c = 0



      //once you reach the column of the final row it repeats
      //if we are in the first row, r = 0 then the colmn is 1. when column = 0, the row  = 1
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      //map functions (number wanted to translate, 0, up to numRows, color1, color2)
      var darkRed = fill(193,39,45)
      var lightRed = fill (128, 26,30)

      var red = map(r, 0, numRows, red, darkRed)
      fill(red)
   

      //uses current time to draw dots
      //we are deciding to do something or do nothing (to draw something or nothing)
      //for any second that has happened is drawn as a large dot
      if (cellNumber == now.sec){
        square(x, y, cellRadius)


        //else if allows for another test to process
        //short circuting logit–if the if isnt true itll move on until it is true then repeat
        //start with a specific test (us just the if statement)
      }else if (cellNumber < totalCells){
        //if it is a second in the future, it is drawn with a small dot
        square(x, y, 66.6668)
        fill('white')
      }
    
      // if (cellNumber == hour){
      //   square(x, y cellRadius)
      //   stroke(0)
      // }
    })



  })
//right side
  translate (66.6668*5,0)

  var eqaulSpacing = 66.6668
    // choose the spacing parameters for the grid
  var colSpacing = eqaulSpacing
  var rowSpacing = eqaulSpacing
  //how big each dot should be
  var cellRadius = 44.4445

  //60 seconds
  var totalCells = 84

  var numColumns = 7

   //keeps number constant
  //floor (rounds down) and ceil (rounds up)
  //round (rounds to nearest 1)
  var numRows = ceil(totalCells/numColumns)
  
  //loop inside loop
  //first loops runs

  
  //'numRow' is how manytimes over the loop repeats
  _.times(numRows, r => {
      //r = 0
   

    //'numColumns' is how manytimes over the loop repeats
    _.times(numColumns, c => {
      //c = 0



      //once you reach the column of the final row it repeats
      //if we are in the first row, r = 0 then the colmn is 1. when column = 0, the row  = 1
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      //map functions (number wanted to translate, 0, up to numRows, color1, color2)
      var darkRed = fill(0)
      var lightRed = fill ('lightblue')

      var red = map(r, 0, numRows, red, darkRed)
      fill(red)
   

      //uses current time to draw dots
      //we are deciding to do something or do nothing (to draw something or nothing)
      //for any second that has happened is drawn as a large dot
      if (cellNumber == now.hour){
        square(x, y, cellRadius)
        fill('yellow')


        //else if allows for another test to process
        //short circuting logit–if the if isnt true itll move on until it is true then repeat
        //start with a specific test (us just the if statement)
      }else if (cellNumber < totalCells){
        //if it is a second in the future, it is drawn with a small dot
        square(x, y, 66.6668)
      }
    
      // if (cellNumber == hour){
      //   square(x, y cellRadius)
      //   stroke(0)
      // }
    })



  })

}