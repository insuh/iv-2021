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
    background(240);
  } else if (now.pm) {
    background(33);
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
    stroke(33);
    fill(240);
  } else if (now.pm) {
    stroke(240);
    fill(33);
  };

  let s = map(now.sec,0,60,0,100);
  ellipse(width/2,height/2,100,100);

  noStroke();
  fill (209,44,44);
  ellipse(width/2,height/2,s,s);
}

function minutess() {
  if (now.am) {
    stroke(33);
    fill(240);
  } else if (now.pm) {
    stroke(240);
    fill(33);
  };

  m = map(now.min,0,60,100,200);
  ellipse(width/2,height/2,200,200);

  noStroke();
  fill (126,57,163);
  ellipse(width/2,height/2,m,m);
}

function hourss() {
  if (now.am) {
    stroke(33);
    fill(240);
  } else if (now.pm) {
    stroke(240);
    fill(33);
  };
  h = map(now.hour,1,12,201,300);
  ellipse(width/2,height/2,300,300);

  noStroke();
  fill (57,124,158);
  ellipse(width/2,height/2,h,h);
}