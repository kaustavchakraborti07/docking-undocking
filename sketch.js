var iss,issImg,scImg1,scImg2,scImg3,scImg4,spaceCraft
var hasDocked=false;
function preload(){

bg=loadImage("images/spacebg.jpg");
issImg=loadImage("images/iss.png");
scImg1=loadImage("images/spacecraft1.png");
scImg2=loadImage("images/spacecraft2.png");
scImg3=loadImage("images/spacecraft3.png");
scImg4=loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spaceCraft=  createSprite(285, 240);
spaceCraft.addImage(scImg1);
spaceCraft.scale=0.15;
iss=createSprite(330,130);
iss.addImage(issImg);
iss.scale=0.25;
}

function draw() {
  background(bg); 
  spaceCraft.addImage(scImg1);
    if(!hasDocked){
    spaceCraft.x+=random(1,-1);
    if(keyDown("UP_ARROW")){
    spaceCraft.y-=2;
    }
    if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(scImg2);
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(scImg4);
      spaceCraft.x-=1;
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(scImg3);
    spaceCraft.x+=1;
    }
    } 
    if(spaceCraft.y<=iss.y+70  && spaceCraft.x<=iss.x-10){
      hasDocked=true;
      textSize(25);
      fill(255);
      text("docking successful",200,300);
    }
    drawSprites();
}