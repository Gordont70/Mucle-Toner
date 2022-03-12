var form1
var startbutton
var background1

function preload(){
  background1 = loadImage("background1.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  background1.scale = 4
  title = createElement("h1");
  title.html("Hello, welcome")
  title.position(250,250)
  startbutton = createButton("Start")
  startbutton.position(600,200)


}

function draw() {
  background("grey");
  startbutton.mousePressed(() => {
      form1 = new Form();
      title.hide();
      startbutton.hide();

    });



  drawSprites();
}