let blue, red;
let img;

function preload() {
  img = loadImage('data/rina2.jpg');
}


function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  red = new Riso('pumpkin');
  green = new Riso('fluorescentyellow');
  blue = new Riso('mediumblue');
  // noLoop();
}

let space=450;
let ditherType = 'bayer';

function draw() {
  background(255);
  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  img.resize(300, 0);

  let reds = extractRGBChannel(img, "red");
  let greens = extractRGBChannel(img, "green");
  let blues = extractRGBChannel(img, "blue");

  red.imageMode(CENTER);
  green.imageMode(CENTER);
  blue.imageMode(CENTER);

  // red.image(reds , width/2 - space, height/2, img.width, img.height);
  // green.image(greens , width/2, height/2, img.width, img.height);
  // blue.image(blues , width/2 + space, height/2, img.width, img.height);

  let dithered = ditherImage(img, ditherType, threshold);//pass image to dither

  red.image(dithered, width/2 - space, height/2, img.width, img.height); //draw dithered image
  green.image(dithered, width/2, height/2, img.width, img.height);
  blue.image(dithered, width/2 + space, height/2, img.width, img.height);
  
  drawRiso();
}

function mousePressed() {
  if (space === 450) {
    space = 0;
  } else {
    space = 450;
  }
}

// // Create graphic text
// let textGraphic = createGraphics(width, height);
// textGraphic.fill(0);
// // textGraphic.textStyle(BOLD);
// textGraphic.textFont('Helvetica');
// textGraphic.textAlign(CENTER, CENTER);
// textGraphic.textSize(40);
// textGraphic.text('wedogood', width * 0.5, height * 0.7);
// blue.cutout(textGraphic);