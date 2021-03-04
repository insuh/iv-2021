let m;
let h;
let s;
let now;
let scounter = 0;
let mcounter = 0;
let hcounter = 0;

function setup() {
  // set the width & height of the sketch
  createCanvas(800, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
  
}

function draw() {
  now = clock();
  background("rgba(0,0,0,0.01)");

  // set up typography & drawing-color
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(42) // make it big
  

  // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)

  secondss();
  
  minutess();

  hourss();

}

function secondss() {
  scounter += 0.05;
  let y = sin(scounter) * 60 + height/2;
  let x = cos(scounter) * 60 + width/2;
  noStroke();
  fill(255,51,51);
  ellipse(x,y,20,20);
}

function minutess() {
  mcounter += 0.01;
  let y = sin(mcounter) * 100 + height/2;
  let x = cos(mcounter) * 100 + width/2;
  noStroke();
  fill(153,51,255);
  ellipse(x,y,20,20);
}

function hourss() {
  hcounter += 0.005;
  let y = sin(hcounter) * 140 + height/2;
  let x = cos(hcounter) * 140 + width/2;
  noStroke();
  fill(51,153,255);
  ellipse(x,y,20,20);
}