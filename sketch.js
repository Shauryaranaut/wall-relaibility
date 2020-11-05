var wall;
var bullet,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(30,52);
  weight=random(223,321);
  bullet=createSprite(50, 200, 100, 30);
  bullet.shapeColor=color(255,255,255);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);
  if (keyDown("v")) {
  text("speed =",950,45);
 text(speed,1000,45);
  text("weight =",950,60);
  text(weight,1000,60);
  text("thickness =",930,75);
  text(thickness,1000,75);
  
  }
  
    text("press v to view details------------->",700,60);


   


    bullet.velocityX = speed;

    
       if (hasCollided(bullet,wall))
       {
         bullet.velocityX=0
         var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);


         if (damage>10) 
         {
           wall.shapeColor=color(255,0,0);
         }
         if (damage<10)
         {
           wall.shapeColor=color(0,255,0);
         }
       }
      
       
       
     
    
    
  drawSprites();
}

function hasCollided(lbullet,lwall)
 {
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}