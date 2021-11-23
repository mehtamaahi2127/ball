
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.rectangle(400,550,800,25,{isStatic:true})
World.add(world,ground)
	Engine.run(engine);
 leftsprite = createSprite(590,500,10,80)
 leftsprite.shapeColor = "skyBlue"
 rightsprite = createSprite(700,500,10,80)
rightsprite.shapeColor = "skyBlue"
ball = Bodies.circle(40,50,30)
World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("skyBlue")
  rect(ground.position.x,ground.position.y,800,25)
  fill("brown")
ellipse(ball.position.x,ball.position.y,30)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.1,y:-0.1})
	}
}


