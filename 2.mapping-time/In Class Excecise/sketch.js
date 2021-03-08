//Things to try:


// - draw the 'current' second in a different color/size
function setup() {
  createCanvas(600, 600)
}

function draw(){
  var now = clock()
  translate(100,100)
  background('white')
  noStroke()
  fill(0)

  
  // choose the spacing parameters for the grid
  var colSpacing = 30
  var rowSpacing = 45
  var cellRadius = 10
 
  
  // determine the layout of the grid
  var totalCells = 60
  var numColumns = 10
  var numRows = ceil(totalCells/numColumns)
  
  
  _.times(numRows, r => {
   
    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      var grey = map(r, 0, numRows, 0, 255)
      fill(grey)

      if (cellNumber == now.sec)
        fill ('blue')
      else if (cellNumber < now.sec){
        circle(x, y, cellRadius)
      }else if (cellNumber < totalCells){
        circle(x, y, cellRadius*2)
      }
    
    })

  })

}


// // - draw the first and last dots in each row differently
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
//       else if { (cellNumber < 10)
//         fill('blue')

//       }
    
//     })

//   })

// }


// // - pick each dot's size by map'ing its cell/row/col number
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
    
//     })

//   })

// }


// // - use the pointAt function to draw the rows radially
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
    
//     })

//   })

// }


// // - draw each 'row' as a number of concentric circles
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }else if {(cellNumber == totalCells)
//         circle(x, y, 20)

//       }
    
//     })

//   })

// }


// // - use lerpColor as a replacement for the grey fill color
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
    
//     })

//   })

// }


// // - use lerpColor for a gradient in each row of dots
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
    
//     })

//   })

// }


// // - use lerpColor for a gradient that runs from cell 1–60
// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
    
//     })

//   })

// }


// // original

// function setup() {
//   createCanvas(600, 600)
// }

// function draw(){
//   var now = clock()
//   translate(100,100)
//   background('white')
//   noStroke()
//   fill(0)

  
//   // choose the spacing parameters for the grid
//   var colSpacing = 30
//   var rowSpacing = 45
//   var cellRadius = 10
 
  
//   // determine the layout of the grid
//   var totalCells = 60
//   var numColumns = 10
//   var numRows = ceil(totalCells/numColumns)
  
  
//   _.times(numRows, r => {
   
//     _.times(numColumns, c => {
//       var cellNumber = r*numColumns + c
//       var x = c * colSpacing
//       var y = r * rowSpacing

//       var grey = map(r, 0, numRows, 0, 255)
//       fill(grey)
   
//       if (cellNumber < now.sec){
//         circle(x, y, cellRadius)
//       }else if (cellNumber < totalCells){
//         circle(x, y, 4)
//       }
    
//     })

//   })

// }