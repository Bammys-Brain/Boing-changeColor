var f, m;
var Divya, Kushal;

function setup() {
  createCanvas(1200,800);
  f = createSprite(400, 100, 50, 80);
  f.shapeColor = "green";
  f.debug = true;
  m = createSprite(400,700,80,30);
  m.shapeColor = "green";
  m.debug = true;


  f.velocityY = 4;
  m.velocityY =-5;


  Divya = createSprite(200, 200, 60, 60);
  Kushal = createSprite(400, 400, 50, 70);

}

function draw() {
  background(0,0,0);  
 //m.x = World.mouseX;
 //m.y = World.mouseY;


 Divya.x = mouseX;
 Divya.y = mouseY;


  //changeColor(f, m);

  changeColor(Kushal, Divya);

  Boing(f, m);

 
  drawSprites();
}

// passing in arguments in the function 

function changeColor(movingRect, fixedRect){

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}



}




function Boing(movingRect, fixedRect){

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
    {

      movingRect.velocityX =  movingRect.velocityX * (-1);
      fixedRect.velocityX =  fixedRect.velocityX * (-1);
 
}
else if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
 
    movingRect.velocityY =  movingRect.velocityY * (-1);
    fixedRect.velocityY =  fixedRect.velocityY * (-1);
  
}





}






