let m;
let h;
let s;
let now;
let scounter = 0;
let mcounter = 0;
let hcounter = 0;
let secBall = 0;
let minBall = 0;
let hourBall = 0;

let timeFill = 0;

function setup() {
  // set the width & height of the sketch
  createCanvas(800, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
  
}

function draw() {
  now = clock();

  if (now.am) {
    background(240);
    timeFill = color(240);
  } else if (now.pm) {
    background(33);
    timeFill = color(33);
  }

  stroke(209,44,44); //sec
  line(width/2-100,height/2-200,width/2-100,height/2+200);
  stroke(126,57,163); //min
  line(width/2,height/2-200,width/2,height/2+200);
  stroke(57,124,158); //hour
  line(width/2+100,height/2-200,width/2+100,height/2+200);

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
  secBall = map(now.sec,0,60,50,450);
  stroke(209,44,44);
  fill(timeFill);
  ellipse(width/2-100,secBall,15,15);
}

function minutess() {
  minBall = map(now.min,0,60,50,450);
  stroke(126,57,163);
  fill(timeFill);
  ellipse(width/2,minBall,15,15);
}

function hourss() {
  hourBall = map(now.hour,1,12,50,450);
  stroke(57,124,158);
  fill(timeFill);
  ellipse(width/2+100,hourBall,15,15);
}