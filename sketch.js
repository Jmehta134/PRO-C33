const  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine , world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,10);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  textSize(30);
  text("Score : "+score,20,30);
  textSize(30);
  // texting scorres
  for (var i = 30 ; i < 270 ; i = i+80){
    text(100, i-20,600);
  }
  for (var i = 590 ; i < width ; i = i+80){
    text(100, i-20,600);
  }
  for (var i = 270 ; i < 590 ; i = i+80){
    text(500, i-20,600);
  }

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount===60){
     particles.push (new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //counting scores  (5 times)
   if (particles[0]&&particles[0].body.position.y >750){
      particles[0].remove();
      particles.pop();
      score = score + 500;
      if (count < 4){
        particles.push (new Particle(random(width/2-30, width/2+30), 10,10));
      }
      count++;
      console.log(count);
   }
   if (count === 5){
     textSize(80);
     text("Game Over",200,450);
   }
}
