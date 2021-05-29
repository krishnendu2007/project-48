var bg1,bg2,ethan;
var gameState = 0;
var ground;
var zombieGroup;
var score=0;

function preload(){
bg1 = loadImage("Images/bg1.jpeg")
bg2 = loadImage("Images/bg2.jpeg")
ethanImg = loadImage("Images/ethan.png")
dog1 = loadImage("Images/dog.png")
z1 = loadImage("Images/Z1.jpeg")
z2 = loadImage("Images/Z2.jpeg")
z3 = loadImage("Images/Z3.jpeg")


}

function setup(){
 var canvas = createCanvas(1400,700);  
 ground = createSprite(700,650,1400,50);
 ground.x = ground.width/2;
 //ground.velocityX = -4;
 ethan = createSprite(70,500,50,100);
 ethan.addImage(ethanImg);
 ethan.scale = 0.3
zombieGroup = new Group()
 



}

function draw(){
    if(gameState === 0){
    background(bg1);
    textSize(30);
    fill("red");
    text("Let's save our city from zombies",400,300);
    text("Click space to start the game",420,350)
    if(keyDown('space')){
    gameState = 1;
    }
}
if(gameState === 1){
background(bg2)
textSize(30);
fill("whitš");
text("Score:"+score,1200,100);
score = score + Math.round(getFrameRate()/60);
if(keyDown(UP_ARROW)){
ethan.velocityY = -12;
}
ethan.velocityY = ethan.velocityY +0.8;
if(ground.x <0){
   ground.x = ground.width/2; 
}
spawnZombies();
if(zombieGroup.isTouching(ethan)){
   gameState = 2;      
}
ethan.collide(ground)
drawSprites()
}
else if (gameState === 2)
{
background("black");
textSize(40);
fill("red");
text("Game Ended!!!",650,350);
}
}


function spawnZombies() {
    if(frameCount % 100 === 0) {
      var zombies = createSprite(1400,600,50,80);
      //obstacle.debug = true;
     zombies.velocityX = -6 
      
      //generate random obstacles
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: zombies.addImage(dog1);
                break;
        case 2: zombies.addImage(z1);
                break;
        case 3: zombies.addImage(z2);
                break;
        case 4: zombies.addImage(z3);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      zombies.scale = 0.5;
      zombies.lifetime = 300;
      zombieGroup.add(zombies);
      //add each obstacle to the group
      //obstaclesGroup.add(obstacle);
    }
  }