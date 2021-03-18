function setup() {
  // set the width & height of the sketch
  createCanvas(400, 2000)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var spacing = 30

  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  
  _.times(now.hour, i => {
    fill(0)
    circle(100, 100 + i * spacing, 20)
  })

  // draw as many circles as the current now.min value
  // by creating a list from 0 .. `now.min` using _.range
  // and then stepping through that list using _.each or .forEach
  
  var mins = _.range(now.min)

  print(mins)

  noLoop()

  mins.forEach( i => {
    fill(100)
    circle(200, 100 + i * spacing, 20)
  })
  

  // draw as many circles as the current `now.sec` value
  // using `for (;;){...}` syntax

  for (i = 0; i < now.sec; i++) {
    fill(255,0,0)
    circle(300, 100 + i * spacing, 20)
  }
  
  
  
  // Phase 2:
  // Once you've successfully drawn vertical stacks of dots, modify
  // your loops to draw concentric circles whose diameters are 
  // multiples of the `spacing` variable. Switch from using fill()  
  // colors to stroke() colors so we can see all the nested circles
}