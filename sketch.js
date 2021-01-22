const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    //Create Bodies
    groundObiect = new Ground(240, 800, 480, 50);
    //for (var i = 0; i <= 480;"i+80" is to be given as i=i+80)
    for (var i = 0; i <= 480; i=i+80) {
        divisions.push(new Division(i, 800-divisionHeight/2, 10, divisionHeight));
    }
    
    for (var i = 40; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 75));
    }

    for (var i = 15; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 175));
    }

    for (var i = 40; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 275));
    }

    for (var i = 15; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 375));
    }

    
}


function draw(){
    background(0);
    Engine.update(engine);
    groundObiect.display();
    

    for(var k = 0; k < plinkos.length; k++) {
        plinkos[k].display();
    }
    if (frameCount%60 === 0) {
        particles.push(new Particle(random((width/2)-10, (width/2)+10), 10));
    }

    for(var k = 0; k < particles.length; k++) {
        particles[k].display();
    }

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }
    drawSprites();
}