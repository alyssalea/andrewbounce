var xpos = 300
var ypos = 200
var xspeed = 4
var yspeed = 4
function setup() {
  createCanvas (windowWidth,windowHeight)
  background(0);
}

function draw() {
  //background(0);
  rect(xpos,ypos,random(0,255),random(0,255))
  fill(random(0,255),random(0,255),random(0,255));
  
  //xpos+=2
  //ypos+=2
  
  if (xpos > width - 40){
  xspeed = -3
    
  }
  if (ypos > height-40){
  yspeed = -3
  }
  
  if (xpos < 0 ){
    xspeed = 3
  }
  if (ypos < 0 ){
    yspeed = 3
  }
  //if (ypos > height - 40){
   // yspeed = 2
    
  xpos = xpos + xspeed
  ypos = ypos + yspeed
}
function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}
