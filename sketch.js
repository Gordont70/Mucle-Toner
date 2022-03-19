var form1
var startbutton
var background1
var user_name
var startbutton1
var a
var settings_icon
var menu_icon


function preload(){
  background1 = loadImage("background1.jpg")
  settings_icon = loadImage("settings_icon.png")
  menu_icon = loadImage("menu_icon.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("white");
  
  background1.scale = 4
  title = createElement("h1");
  title.html("Hello, welcome")
  title.position(windowWidth/2-150,windowHeight/2-400)

  //startbutton = createButton("Start")
  //tartbutton.position(windowWidth/2,windowHeight/2)

  // this.blank is only for working in a class

  startbutton1 = createButton("Enter")
  startbutton1.position(windowWidth/2+50,windowHeight/2-100)
  input = createInput("").attribute("placeholder","Enter your name");
  input.position(windowWidth/2-200, windowHeight/2-100)

  title1 = createElement("h1")
  title1.html("")
  title1.position(windowWidth/2-150,windowHeight/2-400)



  

  
  


}

function draw() {
  background("grey");
  startbutton1.mousePressed(() => {
      //form1 = new Form();
      title.hide();
      startbutton1.hide();
      input.hide();
      background(background1);
      a = input.value();
      console.log(a);
      title1.html("Hello "+ a + " are you a...")
      nextpage1();
    });

  

  



  drawSprites();
}

function nextpage1(){
  image(menu_icon,0,0,20,20);
  console.log("working now")
}
