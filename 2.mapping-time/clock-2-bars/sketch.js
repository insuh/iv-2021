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
    stroke(33);
  } else if (now.pm) {
    stroke(240);
  };

  noFill();

  for (i = 0; i < 13; i++) {
    rect(100, height / 2 - 100, i * 50, 200);
  }

  rect(100, height / 2 + 100, 600, 20);

}

function secondss() {
  noStroke();
  fill(209, 44, 44);
  s = map(now.sec, 0, 60, 0, 600);
  rect(100, height / 2 + 100, s, 20);
}

function hourminutess() {
  fill(126, 57, 163);
  for (i = 0; i < now.hour; i++) { // delays by 1 hour
    rect(100, height / 2 - 100, i * 50, 200);
  }

  m = map(now.min, 0, 60, 0, 200);
  h = map(now.hour, 1, 12, 50, 600);
  // rect(100,height/2 - (m/2),h,m);
  rect(100, (height / 2) + 100, h, m * -1);
}