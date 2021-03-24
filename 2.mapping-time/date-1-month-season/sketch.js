let now;

let spring = 240;
let summer = 240;
let fall = 240;
let winter = 240;

let strokeColor;

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

  if (now.season === 1) {
    strokeColor = color('rgba(95, 191, 71, 1)');
    spring = color('rgba(95, 191, 71, 1)');
    summer = color('rgba(255, 187, 0, .2)');
    fall = color('rgba(198, 98, 48, .2)');
    winter = color('rgba(57, 181, 184, .2)');
  } else if (now.season === 2) {
    strokeColor = color('rgba(255, 187, 0, 1)');
    spring = color('rgba(95, 191, 71, .2)');
    summer = color('rgba(255, 187, 0, 1)');
    fall = color('rgba(198, 98, 48, .2)');
    winter = color('rgba(57, 181, 184, .2)');
  } else if (now.season === 3) {
    strokeColor = color('rgba(198, 98, 48, 1)');
    spring = color('rgba(95, 191, 71, .2)');
    summer = color('rgba(255, 187, 0, .2)');
    fall = color('rgba(198, 98, 48, 1)');
    winter = color('rgba(57, 181, 184, .2)');
  } else if (now.season === 4) {
    strokeColor = color('rgba(57, 181, 184, 1)');
    spring = color('rgba(95, 191, 71, .2)');
    summer = color('rgba(255, 187, 0, .2)');
    fall = color('rgba(198, 98, 48, .2)');
    winter = color('rgba(57, 181, 184, 1)');
  }

  stroke(strokeColor);

  rectMode(CORNER);
  fill(spring);
  rect(width / 2 - 140, height / 2 - 120, 120, 120, 90, 0, 0, 0);
  fill(summer);
  rect(width / 2 - 140, height / 2, 120, 120, 0, 0, 0, 90);
  fill(fall);
  rect(width / 2 + 20, height / 2, 120, 120, 0, 0, 90, 0);
  fill(winter);
  rect(width / 2 + 20, height / 2 - 120, 120, 120, 0, 90, 0, 0);

  fill(240);

  for (let i = 0; i < 12; i++) {
    rectMode(CENTER);
    rect(width / 2, (height / 2) - 20 * i + (20 * 5.5), 20, 20);
  }

  for (let i = 0; i < now.month; i++) {
    rectMode(CORNER);
    fill(33);
    rect(width / 2 - 10, (height / 2 - 120) + 20 * i, 20, 20);
  }

}