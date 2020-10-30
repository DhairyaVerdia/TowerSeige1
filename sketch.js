const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var gr1;
var rope;
var hexa;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

gr1 = new Ground(600,300,200,10);

hexa = new Block(100,100,50,50);

rope = new Slingshot(hexa.body,{x:100,y:200});

b1 = new Block(600,275,40,40);
b2 = new Block(640,275,40,40);
b3 = new Block(680,275,40,40);
b4 = new Block(560,275,40,40);
b5 = new Block(520,275,40,40);
b6 = new Block(620,235,40,40);
b7 = new Block(580,235,40,40);
b8 = new Block(540,235,40,40);
b9 = new Block(660,235,40,40);
b10 = new Block(600,195,40,40);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,0,255);  
 Engine.update(engine);

gr1.display();
hexa.display();
rope.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}