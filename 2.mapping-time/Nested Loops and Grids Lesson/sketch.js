// Things to try:
// 
// - draw the 'current' second in a different color/size
// - draw the first and last dots in each row differently
// - pick each dot's size by map'ing its cell/row/col number
// - use the pointAt function to draw the rows radially
// - draw each 'row' as a number of concentric circles
// - use lerpColor as a replacement for the grey fill color
// - use lerpColor for a gradient in each row of dots
// - use lerpColor for a gradient that runs from cell 1–60
// 

function setup() {
  createCanvas(600, 600)
}

function draw(){
  var now = clock()

  //remeber past state
  //push()


  //reset where the x and y position start)
  //this shifts everything over and down by a certain amount
  //removes added offsets throughout the page
  translate(100,100)



  //end–goes back to whatever was before the push
  //pop()

  background('white')
  noStroke()
  fill(0)

  
  // choose the spacing parameters for the grid
  var colSpacing = 30
  var rowSpacing = 45
  //how big each dot should be
  var cellRadius = 10
 
  
  // determine the layout of the grid
  //how many dots in total. how many per-row

  //60 seconds
  var totalCells = 60

  var numColumns = 10


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
      var grey = map(r, 0, numRows, 0, 255)
      fill(grey)
   

      //uses current time to draw dots
      //we are deciding to do something or do nothing (to draw something or nothing)
      //for any second that has happened is drawn as a large dot
      if (cellNumber < now.sec){
        circle(x, y, cellRadius)

        //else if allows for another test to process
        //short circuting logit–if the if isnt true itll move on until it is true then repeat
        //start with a specific test (us just the if statement)
      }else if (cellNumber < totalCells){
        //if it is a second in the future, it is drawn with a small dot
        circle(x, y, 4)
      }
    
    })

  })

}