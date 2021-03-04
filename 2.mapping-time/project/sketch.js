let m;
let h;
let s;
let now;

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
    background(255);
  } else if (now.pm) {
    background(0);
  }

  // set up typography & drawing-color
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(42) // make it big
  

  // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)
  hourss();
  minutess();
  secondss();
}

function secondss() {
  if (now.am) {
    stroke(0);
    fill(255);
  } else if (now.pm) {
    stroke(255);
    fill(0);
  };

  let s = map(now.sec,0,60,0,100);
  ellipse(width/2,height/2,100,100);

  noStroke();
  fill (255,51,51);
  ellipse(width/2,height/2,s,s);
}

function minutess() {
  if (now.am) {
    stroke(0);
    fill(255);
  } else if (now.pm) {
    stroke(255);
    fill(0);
  };

  m = map(now.min,0,60,100,200);
  ellipse(width/2,height/2,200,200);

  noStroke();
  fill (153,51,255);
  ellipse(width/2,height/2,m,m);
}

function hourss() {
  if (now.am) {
    stroke(0);
    fill(255);
  } else if (now.pm) {
    stroke(255);
    fill(0);
  };
  h = map(now.hour,1,12,201,300);
  ellipse(width/2,height/2,300,300);

  noStroke();
  fill (51,153,255);
  ellipse(width/2,height/2,h,h);
}