var balloon,balloonImg
var background,backgroundImg

function preload(){
backgroundImg=loadImage("Hot Air Ballon-01.png")
balloonImg=loadImage("Hot Air Ballon-02.png")
}

function setup() {
  createCanvas(500,500);
  balloon=createSprite(20,20,20,20);
  balloon=addImage(balloonImg);

  

  createSprite(400, 200, 50, 50);
}



function draw() {
  background(backgroundImage); 
  if(keyDown("LEFT_ARROW")){
    balloon.velocityX=-5;
  }
  if(keyDown("RIGHT_ARROW")){
    balloon.velocityX=5;
  }
  if(keyDown("UP_ARROW")){
    balloon.velocityY=-5;
  }
  if(keyDown("DOWN_ARROW")){
    balloon.velocityY=5;
  }
  drawSprites();
}