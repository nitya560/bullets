var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="Pink"
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10){
      wall.shapeColor="green"
    }
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletright=Lbullet.x+Lbullet.width
  wallleft=Lwall.x
  if(bulletright>=wallleft){
    return true
  }
  return false
}