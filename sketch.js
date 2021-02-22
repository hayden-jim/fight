const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,
box10,box11,box12,box13,box14,box15,box16,box17,
box18,box19,box20;
var backgroundImg;
var hero, rope, monster;
var backgroundImg


var gameState= "onsling"
function preload() {
    backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1400,1200);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(420,700,1200,9);
    box1 = new Box(500,100,70,70);
    box2 = new Box(500,100,70,70);
    box3 = new Box(500,100,70,70);
    box4 = new Box(500,100,70,70);
    box5 = new Box(500,100,70,70); 
    box6 = new Box(600,100,70,70);
    
    box7 = new Box(600,100,70,70);
    box8 = new Box(600,100,70,70);
    box9 = new Box(600,100,70,70);
    box10 = new Box(600,100,70,70);
    box11 = new Box(700,100,70,70);
    box12 = new Box(700,100,70,70);
    
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(800,100,70,70);
    box17 = new Box(800,100,70,70);
    box18 = new Box(800,100,70,70);
    box19 = new Box(800,100,70,70);
    box20 = new Box(800,100,70,70);
    
    hero = new Hero(200,400,90,90);

    monster = new Monster(1000,500,80,80)

    rope = new Fly(hero.body,{x:200, y:400});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ground.display();
    hero.display();
    monster.display();
    if(monster.body.position.x>1200){
        textSize(30)
        textFont("century gothic")
        text("You won!!",500,300)
      }
    
      
}

function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
}



function mouseReleased(){
    rope.fly();
    gameState="launched"
}

function keyPressed(){
    if(keyCode === 32){
        hero.trajectory=[];
        Matter.Body.setPosition(hero.body,{x:200, y:200});
       rope.attach(hero.body);
       gameState = "onSling"
    }
}



