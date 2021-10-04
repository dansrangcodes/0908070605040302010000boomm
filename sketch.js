var sea, ship_moving;

function preload() {

  seaImg = loadImage("sea.png");
  
  ship_moving = loadAnimation("ship-1.png", "ship-2.png");
  ship.Img2 = loadAnimation("ship-3.png", "ship-4.png");
  
   



}

function setup() {
  createCanvas(600,900);

  sea = createSprite(400, 200);
  sea.scale = 0.4;
  sea.addImage(seaImg);
  sea.velocityX = -3;
  

  ship = createSprite(100, 250, 20, 2)
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.2;
  
  

}

function draw() {

  
 if (keyDown("space")){
   ship.addAnimation ("shiplighton",ship.Img2);
 } 

  if (sea.x < 0) {
   sea.x = sea.width / 2
  } 
 
  
              
  drawSprites();

}