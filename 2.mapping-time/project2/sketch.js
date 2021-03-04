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
  };

  // set up typography & drawing-color
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(42) // make it big
  

  // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)
  
  secondss();
  hourminutess();
  if (now.am) {
    stroke(0);
  } else if (now.pm) {
    stroke(255);
  };

  noFill();

  for (i=0; i<12; i++) {
    rect(100,height/2-100,i*50,200);
  }

  rect(100,height/2-100,600,200);
  rect(100,height/2+100,600,20);
}

function secondss() {
  noStroke();
  fill(255,51,51);
  s = map(now.sec,0,60,0,600);
  rect(100,height/2+100,s,20);
}

function hourminutess() {
  fill(153,51,255);
  m = map(now.min,0,60,0,200);
  h = map(now.hour,1,12,50,600);
  rect(100,height/2 - (m/2),h,m);
}