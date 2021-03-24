let now;

let distance;

let b;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  now = clock();

  if (now.month === 1) {
    distance = 70;
    b = 33;
  } else if (now.month === 2) {
    distance = 80;
    b = 30;
  } else if (now.month === 3) {
    distance = 90;
    b = 27;
  } else if (now.month === 4) {
    distance = 100;
    b = 24;
  } else if (now.month === 5) {
    distance = 110;
    b = 21;
  } else if (now.month === 6) {
    distance = 120;
    b = 18;
  } else if (now.month === 7) {
    distance = 130;
    b = 15;
  } else if (now.month === 8) {
    distance = 140;
    b = 12;
  } else if (now.month === 9) {
    distance = 150;
    b = 9;
  } else if (now.month === 10) {
    distance = 160;
    b = 6;
  } else if (now.month === 11) {
    distance = 170;
    b = 3;
  } else if (now.month === 12) {
    distance = 180;
    b = 0;
  }

  background(b);

  let monthAngle = map(now.month, 1, 13, 0, 360);

  let a = map(now.moon, 0, 1, 0, 255);

  let origin = {
    x: width / 2,
    y: height / 2
  };

  let monthLocation = pointAt(origin.x, origin.y, monthAngle, distance);

  stroke(240);

  fill(255, 255, 255, a);
  circle(origin.x, origin.y, 100);

  fill(240);
  circle(monthLocation.x, monthLocation.y, 20);

}

function pointAt(cx, cy, angle, dist) {
  let theta = angle / 360 * TWO_PI
  return {
    x: cx + cos(theta) * dist,
    y: cy + sin(theta) * dist
  }
}