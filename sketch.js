const Engine=Matter.Engine;
const   World=Matter.World;
 const   Bodies=Matter.Bodies;
var ball,ground;
var myEngine,myWorld;


function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var ball_OPT={
    restitution:1
  }

  ball=Bodies.circle(200,200,25,ball_OPT);
  World.add(myWorld,ball);
 

  var groundOptions={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(myWorld,ground);
}

function draw() {
  background(0); 
  
  Engine.update(myEngine);
  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  fill("green");
  rectMode(CENTER);
  rect(200,390,400,20);

}