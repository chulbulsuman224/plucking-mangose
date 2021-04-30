const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy;
var mango;
var stone,stoneImage;
var tree,slingShot;


function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400,680,800,20)



    
  stone = new Stone (235,420,30,30)
    boy = new Boy (100,640,200,400);
    tree = new Tree (640,600,300,500)

   

 
    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  tree.display();
  boy.display();
  stone.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



function keyPressed(){
  if(keyCode===32){
      slingShot.attach(boy.body);
  }
}


