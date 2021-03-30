const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
//var bird, slingshot1;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16



function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground = new Ground(320,220,60,20);
    

  // box1 = new Block(700,320,70,70);
    //box2 = new Block(920,320,70,70);
   // box3 = new Block(700,240,70,70);
  //  box4 = new Block(920,240,70,70);
   //box5 = new Block(810,160,70,70);
   box6 = new Block(330,235,30,40);
   box7= new Block(360,235,30,40)
   box8 = new Block(390,235,30,40)
   box9 = new Block(420,235,30,40)
   box10 = new Block(450,235,30,40)
   box11= new Block(480,235,30,40)
   box12= new Block(360,195,30,40)
   box13= new Block(390,195,30,40)
   box14= new Block(420,195,30,40)
   box15= new Block(450,195,30,40)
   box16= new Block(390,195,30,40)
   
   
    //bird = new Bird(100,100);

    
  //  slingshot1 = new slingshot(bird.body,{x:200,y:100});
}

function draw(){
  background(0);
    Engine.update(engine);
    
   // strokeWeight(4);
    box6.display();
    bo7.display();
    ground.display();
   
    box8.display();
    box9.display();
     box10.display();
     box11.display();
     box12.display();
    box13.display();
    box14.display();
box15.display();
box16.display();
}
//function mouseDragged()
//{
  //  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    
//}

//function mouseReleased()
//{
  //  slingshot1.fly()
//}
