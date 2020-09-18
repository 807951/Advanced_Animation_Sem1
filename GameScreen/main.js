// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
//var width = canvas.width = window.innerWidth;
//var height = canvas.height = window.innerHeight;
// function to generate random number
function random(min, max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
function GameArea(){
    	//  Wrapper Div
    	this.wrapperDiv = document.getElementById("wrapperDiv");
    	this.wrapperDiv.setAttribute("style", " background-color:yellow; border: 5px solid black; width:900px; height:800px;");
    	// create tileMenuDiv
    	this.tileMenuDiv = document.createElement("div");
    	this.wrapperDiv.appendChild(this.tileMenuDiv);
    	this.tileMenuDiv.setAttribute("style", " background-color:#00FF00; width:900px; height:100px;float:right;");
	// create tileDivs
	this.tileDiv1 = document.createElement("div");
	this.tileMenuDiv.appendChild(this.tileDiv1);
	this.tileDiv1.setsetAttribute("style", " background-color:#FF0000; width:90px; height:90px;float:right;");
}
	
// define Ball constructor
function Ball() {
  this.x = random(0,width);
  this.y = random(0,height);
  this.velX = random(-7,7);
  this.velY = random(-7,7);
  this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
  this.rad = random(10,20);
}
// define ball draw method
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
  ctx.fill();
};
// define ball update method
Ball.prototype.update = function() {
  if ((this.x + this.rad) > width) {
    this.velX = -(this.velX);
  } else if ((this.x - this.rad) < 0) {
    this.velX = -(this.velX);
  } else if ((this.y + this.rad) > height) {
    this.velY = -(this.velY);
  } else if ((this.y - this.rad) < 0) {
    this.velY = -(this.velY);
  }
  this.x += this.velX;
  this.y += this.velY;
};
// define ball collision detection
Ball.prototype.collisionDetect = function() {
  for(j = 0; j < balls.length; j++) {
    if( (!(this.x === balls[j].x && this.y === balls[j].y && this.velX === balls[j].velX && this.velY === balls[j].velY)) ) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.rad + balls[j].rad) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
};
// define array to store balls
var balls = [];
// define loop that keeps drawing the scene constantly
function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  while(balls.length < 20) {
    var ball = new Ball();
    balls.push(ball);
  }
  for(i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  requestAnimationFrame(loop);
}
//loop();
GameArea();