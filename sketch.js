const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground1 = new Ground (600,900,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box (700,160,70,70);
   box7 = new Box (810,240,70,70)
box8 = new Box (810,320,70,70)
box9 = new Box (920,320,70,70)
    bird = new Bird(400,700);
    slingshot = new SlingShot (bird.body,{x: 400, y:50})

}

function draw(){
    background ("white");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    ground1.display();
    box3.display();
    box4.display();

    box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
    bird.display();
    slingshot.display();
}
function mouseDragged() {
Matter.Body.setPosition (bird.body,{x: mouseX, y:mouseY})



}
function mouseReleased (){
slingshot.fly()




}