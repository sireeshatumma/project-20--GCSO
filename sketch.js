
// global variables
var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 50, 100);
  movingRect=createSprite(100, 200, 100, 50);
  fixedRect.shapeColor='green';
  movingRect.shapeColor='green';

}

function draw() {
  background(0,255,255);
  movingRect.x= mouseX;
  movingRect.y=mouseY;
  //operators to separate conditions- && , ||
  // difference between x position === half of sum of their widths
if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect .width/2 // left
  && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect .width/2 // right
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect .height/2  // bottom
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect .height/2 // top
  ){
  fixedRect.shapeColor='red';
  movingRect.shapeColor='red';  
}
else{
  fixedRect.shapeColor='green';
  movingRect.shapeColor='green';
}

  drawSprites();
}