var monkey,obstacle,banana;

function preload()
{
  backimage = loadImage("jungle.png");
  
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png",);
  
  banana_image = loadImage("banana.png");
  obstacleimage = loadImage("stone.png");
}
function setup(){
  
 //creates sprites
 monkey = createSprite(100,325,19,50);
monkey.addAnimation("monkey", monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,800,10);
ground.velocityX = -4;

bananagroup = createGroup();

score = 0;
 
obstaclegroup = createGroup();
}



function draw() {
  
  background(255);
  
  //makes monkey jump if spacebar is pressed
  if(keyDown("space") && monkey.y>= 310)
  {
    
    monkey.velocityY = -16;
    
  }
  
  //makes ground infinite
  if(ground.x < 0)
  {
   
    ground.x = ground.width/2;
   
  }
  
  //creates gravity
  monkey.velocityY = monkey.velocityY + 1;
  
  //if monkey touchies obstacle its destroyed
  if(monkey.isTouching(obstaclegroup))
  {
   
    obstaclegroup.destroyEach();
    
  }
  
  //makes monkey collide with ground
  monkey.collide(ground);
  
  banana();
  
  obstacle();
  
  //makes bananas destroyed if moneky touches them
  if(monkey.isTouching(bananagroup))
  {
   
    bananagroup.destroyEach(); 
    
  }
  
  //creates score
  score = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+score,200,200);
  
  drawSprites();
  
}

//functions
function banana()
{
  if(frameCount % 80 === 0)
  {
  var banana1 = createSprite(420,   random(120,200),1,1);
  banana1.addImage("Banana", banana_image);
  banana1.velocityX = -4;
  banana1.scale = 0.05;
  bananagroup.add(banana1);
  }
  
}

function obstacle()
{
  if(frameCount % 300 === 0)
  {
    var obstacle = createSprite(450,325,1,1)
    obstacle.addImage("Stone",obstacleimage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 400;
    obstacle.scale = 0.15;
    obstaclegroup.add(obstacle);
  }
  
}
  
