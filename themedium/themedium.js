const quilts = [];
var gridSize;
var step;
var row;
var col;
var highlighted;
const rotations = [];

function setup() {

  createCanvas(800, 800);

  loadQuilts();

  gridSize = sqrt(quilts.length);
  step = width / gridSize;

  frameRate(10);

  rotations.push(PI/2, PI, 3*PI/2, 2*PI);

}

function draw() {

  //assigning integers to my mouse position
  row = floor(mouseX/step);
  col = floor(mouseY/step);

  //when i click the mouse it repeats the given square, when i move it it resets
  if(highlighted == null){
    tileQuilt();
  }else{
    repeatQuilt();
  }

  //highlights square
  fill(255,80);
  stroke(255);
  strokeWeight(1);
  rect(step*row, step*col, step, step);

}

function mousePressed(){

  highlighted = col*5 + row;

}

function mouseMoved(){

  highlighted = null;

}

function keyPressed() {
  if (key == ' ') {
    shuffle(quilts, true);
  }
}

function tileQuilt() {

  var x = 0;
  var y = 0;
  for (const quilt of quilts) {
    image(quilt, x, y, step, step);
    x += step;
    if (x >= width) {
      x = 0;
      y += step;
    }
  }  
}

function repeatQuilt(){

  imageMode(CENTER);
  for(x = 0; x < width; x += step){
    for(y = 0; y < height; y += step){
      push();
      translate(x + step/2, y + step/2);
      rotate(random(rotations));
      image(quilts[highlighted], 0, 0, step, step);
      pop();
    }
  }
  imageMode(CORNER);
}

function loadQuilts(){

  quilts.push(loadImage('quilts/hand.jpg'));
  quilts.push(loadImage('quilts/fingers.jpg'));
  quilts.push(loadImage('quilts/boobs.jpg'));
  quilts.push(loadImage('quilts/love.jpg'));
  quilts.push(loadImage('quilts/boxes.jpg'));
  quilts.push(loadImage('quilts/monuments.jpg'));
  quilts.push(loadImage('quilts/foot.jpg'));
  quilts.push(loadImage('quilts/kiss.jpg'));
  quilts.push(loadImage('quilts/bang.jpg'));
  quilts.push(loadImage('quilts/trees.jpg'));
  quilts.push(loadImage('quilts/faces.jpg'));
  quilts.push(loadImage('quilts/massage.jpg'));
  quilts.push(loadImage('quilts/painting.jpg'));
  quilts.push(loadImage('quilts/fence.jpg'));
  quilts.push(loadImage('quilts/shirt.jpg'));
  quilts.push(loadImage('quilts/queen.jpg'));
  quilts.push(loadImage('quilts/print.jpg'));
  quilts.push(loadImage('quilts/arcs.jpg'));
  quilts.push(loadImage('quilts/swirl.jpg'));
  quilts.push(loadImage('quilts/spike.jpg'));
  quilts.push(loadImage('quilts/splotch.jpg'));
  quilts.push(loadImage('quilts/noses.jpg'));
  quilts.push(loadImage('quilts/subs.jpg'));
  quilts.push(loadImage('quilts/wheel.jpg'));
  quilts.push(loadImage('quilts/eye.jpg'));

}