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

  background(240);

  fill(240);
  stroke(209,44,44);

  for (let i = 0; i < 7; i++) {
    rectMode(CENTER);
    rect(width/2 - 80 * i + (80 * 3), height/2, 70, 70);
  }

  for (let i = 0; i < now.weekday; i++) {
    rectMode(CORNER);
    fill(33);
    rect( (width/2 - 275) + 80 * i, height/2 - 35, 70, 70);
  }

  noFill();
  stroke(209,44,44);

  if (now.day > 7) {
    for (let i = 0; i < now.day; i++) {
      rectMode(CORNER);
      rect( (width/2 - 270) + 80 * (i), height/2 - 30, 60, 60);
    }
  }

  if (now.day > 14) {
    for (let i = 0; i < now.day; i++) {
      rectMode(CORNER);
      rect( (width/2 - 265) + 80 * (i), height/2 - 25, 50, 50);
    }
  }

  if (now.day > 21) {
    for (let i = 0; i < now.day; i++) {
      rectMode(CORNER);
      rect( (width/2 - 260) + 80 * (i), height/2 - 20, 40, 40);
    }
  }

  if (now.day > 28) {
    for (let i = 0; i < now.day; i++) {
      rectMode(CORNER);
      rect( (width/2 - 255) + 80 * (i), height/2 - 15, 30, 30);
    }
  }
  
  noStroke();
  fill(240);
  rect(width - 120, 0, 130, height);    

}