var monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7, monkey8, monkey9, monkey10, bananaImage, backImage, score, stoneImage;

var monkeyAnimation, backSprite, monkeySprite, bananaSprite, foodGroup, food, obstacleGroup;

function preload() {
  monkeyAnimation = loadAnimation("Monkey1.png", "Monkey2.png", "Monkey3.png", "Monkey4.png", "Monkey5.png", "Monkey6.png", "Monkey7.png", "Monkey8.png", "Monkey9.png", "Monkey10.png");
  backImage = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(750, 400);
  foodGroup = new Group();
  obstacleGroup = new Group();
  backSprite = createSprite(380, 200, 10, 10);
  backSprite.addImage(backImage);
  //backSprite.visible = false;
  backSprite.velocityX = -4;
  
  
  invisibleGround = createSprite(400,380,800,30)
  invisibleGround.visible = false;
  monkeySprite = createSprite(70, 300, 10, 10);
  monkeySprite.addAnimation("monkeyrunning", monkeyAnimation);
  monkeySprite.scale = 0.3
  if (keyDown("space") && monkeySprite.y>=272.9) {
    monkeySprite.velocityY = -12;
  }
  monkeySprite.velocityY = monkeySprite.velocityY + 0.5;
  bananaSprite = createSprite(200, 200, 10, 10);
  bananaSprite.addImage(bananaImage);
  bananaSprite.scale = 0.05;
  foodGroup.add(bananaSprite);
  if (foodGroup.isTouching(monkeySprite)) {
    score = score + 2;
  }
  rock = createSprite(300, 350, 10, 10);
  rock.addImage(stoneImage);
  rock.scale = 1 / 3;
  obstacleGroup.add(rock);
  if (obstacleGroup.isTouching(monkeySprite)) {
    monkeySprite.scale = 0.2;
  }
  switch (score) {
    case 10:
      monkeySprite.scale = 0.12;
      break;
    case 20:
      monkeySprite.scale = 0.14;
      break;
    case 30:
      monkeySprite.scale = 0.16;
      break;
    case 40:
      monkeySprite.scale = 0.18;
      break;
    default:
      break;
  }
}

function draw() {
  background(220);
  if (backSprite.x < 0) {
    backSprite.x = backSprite.width / 2;
  }
  monkeySprite.collide(invisibleGround);
  drawSprites();
  score = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);
  console.log(monkeySprite.y)
}