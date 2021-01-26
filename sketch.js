// Tower Seige - 3
// By Shivanshu Pattnaik

// NAMESPACES
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// MAIN SPRITES
var polygon;
var ground;
var ground2;
var slingshot;
var bg;

// GOAL SPRITES
// First Sprites
var redb1, redb2, redb3, redb4, redb5;
var obox1, obox2, obox3, obox4;
var ybox1, ybox2, ybox3;
var gbox1, gbox2;

// Second Sprites
var bbox1, bbox2, bbox3, bbox4;
var ibox1, ibox2, ibox3;
var pbox1, pbox2;

// Score
var score = 0;

function preload(){

    getTime();

}

function setup(){

    var canvas = createCanvas(1200, 500);

    engine = Engine.create();
    world = engine.world;

    // HERE BODIES ARE CREATED
    polygon = new Polygon(200, 200, 50);

    ground = new Ground(600, 300, 200, 10);    
    
    ground2 = new Ground(900, 250, 200, 10);

    slingshot = new Slingshot(polygon.body, {x : 200, y : 270});

    bg = loadImage("BG.png");

    // First Sprites(START)
    redb1 = new RedBox(600, 270);
    redb2 = new RedBox(570, 270);
    redb3 = new RedBox(630, 270);
    redb4 = new RedBox(660, 270);
    redb5 = new RedBox(540, 270);

    obox1 = new OrangeBox(555, 220);
    obox2 = new OrangeBox(585, 220);
    obox3 = new OrangeBox(615, 220);
    obox4 = new OrangeBox(645, 220);

    ybox1 = new YellowBox(600, 170);
    ybox2 = new YellowBox(570, 170);
    ybox3 = new YellowBox(630, 170);

    gbox1 = new GreenBox(585, 120);
    gbox2 = new GreenBox(615, 120);
    // First Sprites(END)

    // Second Sprites(START)
    bbox1 = new BlueBox(855, 220);
    bbox2 = new BlueBox(885, 220);
    bbox3 = new BlueBox(915, 220);
    bbox4 = new BlueBox(945, 220);

    ibox1 = new IndigoBox(900, 170);
    ibox2 = new IndigoBox(870, 170);
    ibox3 = new IndigoBox(930, 170);

    pbox1 = new PurpleBox(915, 120);
    pbox2 = new PurpleBox(885, 120);
    // Second Sprites(END)

    Engine.run(engine);

}

function draw(){

    if(bg){

        background(bg);

    }

    stroke("black");
    strokeWeight(3);
    textSize(30);
    textFont("Typograph Pro");
    fill("white");
    text("SCORE : " + score, 30, 50);

    stroke("black");
    strokeWeight(2);
    textSize(20)
    textFont("Typograph Pro");
    fill("white");
    text("DRAG THE HEXAGONAL STONE, AND RELEASE TO HIT THE OBJECTS", 250, 450);

    slingshot.display();
    ground.display();
    ground2.display();
    polygon.display();

    redb1.display();
    redb2.display();
    redb3.display();
    redb4.display();
    redb5.display();
    
    obox1.display();
    obox2.display();
    obox3.display();
    obox4.display();

    ybox1.display();
    ybox2.display();
    ybox3.display();

    gbox1.display();
    gbox2.display();

    bbox1.display();
    bbox2.display();
    bbox3.display();
    bbox4.display();

    ibox1.display();
    ibox2.display();
    ibox3.display();

    pbox1.display();
    pbox2.display();

    redb1.score();
    redb2.score();
    redb3.score();
    redb4.score();
    redb5.score();
    
    obox1.score();
    obox2.score();
    obox3.score();
    obox4.score();

    ybox1.score();
    ybox2.score();
    ybox3.score();

    gbox1.score();
    gbox2.score();
    
    bbox1.score();
    bbox2.score();
    bbox3.score();
    bbox4.score();

    ibox1.score();
    ibox2.score();
    ibox3.score();

    pbox1.score();
    pbox2.score();

    drawSprites();

}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var JSONresponse = await response.json();

    var datetime = JSONresponse.datetime;

    var hour = datetime.slice(11, 13);

    if(hour >= 06 && hour <= 18){

        bg = loadImage("BG.png");

    }
    else{

        bg = loadImage("BG_DARK.jpg");

    }

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

    slingshot.fly();

}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(polygon.body);

    }

}
