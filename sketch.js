const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(65,590,70);
	ground = new Ground(600,599,1400,10);
	bin = new Dustbin(1000,590,150,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  paper.display();
  ground.display();
  bin.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 140, y : -140});
 	}

}