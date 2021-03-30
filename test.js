let mic;

function setup(){
  pixelDensity(1);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();

  frameRate(12);

  blue = new Riso('bubblegum');
  red = new Riso('ivy');
}

function draw(){
  let s=5;
  background(255);
  // clearRiso();
  
  fill(0);
  text('wedogood', width/2, height/2);

  blue.noStroke();
  red.noStroke();
  
  micLevel = mic.getLevel();

  for (let x=0; x < width; x = x + 140) {
    for (let y=0; y < height; y = y + 140) {
      console.log(micLevel)

      blue.fill(map(y, 0, height, 20, 220));
      blue.ellipse(
        x + micLevel*1000,
        y + micLevel*1000,
        s + micLevel*100*random(-10, 10),
        s + micLevel*100*random(-10, 10)
      );
      red.fill(map(x, 0, width, 20, 220));
      red.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s,
        s
      );
    }
  }
  drawRiso()
}

function mousePressed(){
  draw()
}
