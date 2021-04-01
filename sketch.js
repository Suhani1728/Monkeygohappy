var monkey,monkey_image
var background_image,back
var invisibleGround
var stone
var stoneGroup
var banana_image
var foodGroup
var score

function preload(){
  monkey_image=loadAnimation("Monkey_01.png","Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  background_image=loadImage("jungle.jpg")
  
  stone=loadImage("stone.png")
  
  banana_image=loadImage("banana.png")
  
}

function setup(){
  createCanvas(400,400);
   back=createSprite(200,200,10,10);
  back.addImage(background_image);
  back.scale=1;
  
  monkey=createSprite(50,320,10,10);
  monkey.addAnimation("run",monkey_image);
  monkey.scale=0.15;
  
  invisibleGround=createSprite(200,360,400,10);
  invisibleGround.visible=false;
  
  stoneGroup=new Group();
  foodGroup=new Group();
  
  score=0;
 
}

function draw(){
 
  
  background(255)
  
  back.velocityX=-5;
  if(back.x<0){
   back.x=back.width/2;
  }
  
  monkey.velocityY=monkey.velocityY+0.3;
  
  if(keyDown("space")){
    monkey.velocityY=-4;
  }
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
    score=score+2;   
}
  
  if(monkey.isTouching(stoneGroup)){
    monkey.scale=0.1  ;
  }
  
  
  spawnObstacle();
  spawnFood();
  
  monkey.collide(invisibleGround);
 

  drawSprites();
  
  stroke("white");
  fill("black");
  textSize(15);
   text("Score: "+score,200,100);
  textSize(20);
  text("Beware Of The Stones",100,50)
  
  switch(score){
    case 10: monkey.scale=0.20;
      break;
      
      case 20: monkey.scale=0.25;
      break;
      
      case 30: monkey.scale=0.30;
      break;
      
      case 40: monkey.scale=0.35;
      
    default:break;
  }
  
  
}

function spawnFood(){
  if(frameCount%100===0){
  var banana=createSprite(400,170,10,10);
  banana.addImage(banana_image);
  banana.scale=0.05;
    banana.velocityX=-4;
    banana.y=random(70,250);
    foodGroup.add(banana);
}
}

function spawnObstacle(){
  
   if(frameCount%150===0){
  var obstacle=createSprite(400,320,10,10);
 obstacle.addImage(stone);
 obstacle.scale=0.2;
 obstacle.velocityX=-4;
  stoneGroup.add(obstacle);
  
   }
}