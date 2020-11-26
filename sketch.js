var mr, fr
var nr, tr
var go1, go2;
var go3, go4;

function setup() {
  createCanvas(800,400);
  fr = createSprite(200,200,50,50);
  mr = createSprite(400, 200, 50, 50);
  nr = createSprite(0,300,50,50);
  nr.velocityX = 3;
  tr = createSprite(800,300,50,50);
  tr.velocityX = -3;
  nr.debug = true;
  tr.debug = true;

  go1 = createSprite(100,100,50,50);
  go1.shapeColor="yellow";
  go2 = createSprite(100,170,50,50);
  go2.shapeColor="yellow";

  go3 = createSprite(600,0,50,50);
  go3.shapeColor="blue";
  go3.velocityY = 4;
  go4 = createSprite(600,400,50,50);
  go4.shapeColor="blue";
  go4.velocityY = -4;
  go3.debug = true;
  go4.debug = true;
}

function draw() {
  background("black");  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if (isTouching(mr,go2)){
    go2.shapeColor = "red";
    mr.shapeColor = "red";
  }else{
    go2.shapeColor = "green";
    mr.shapeColor = "green";
  }
  
  bounceoff(go3,go4);

  drawSprites();
}

