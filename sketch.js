
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var Floor;
var TrashL;
var TrashB;
var TrashR;
var Waste;


function preload()
{
	
}

function setup() 
{
	createCanvas(1515, 700);


	engine = Engine.create();
	world = engine.world;

	TrashL = new Dustbin (1090,630,20,100);
	TrashB = new Dustbin (1200,670,200,20);
	TrashR = new Dustbin (1300,630,20,100);

	Floor = new Ground (1000,690,2016,20);

	Waste = new Paper (100,400,20);
	


	Engine.run(engine);
  
}


function draw() 
{

  background(0);
  TrashL.display();
  TrashB.display();
  TrashR.display();

  Floor.display();

  Waste.display();

  drawSprites();
 
}

function keyPressed()
{
 if ( keyCode === RIGHT_ARROW){
	 Matter.Body.applyForce(Waste.body,Waste.body.position,{x: 20,y: -25})
 }

}



