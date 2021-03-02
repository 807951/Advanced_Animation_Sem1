function SnakeHead(x, y, dx, dy, radius, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.radius = radius;
  r = Math.random()*255;
  g = Math.random()*255;
  b = Math.random()*255;
  this.clr = "rgba(" + r + ", "+ g + ","+ b +")"
}

SnakeHead.prototype.run = function(){
  this.checkEdges();
  this.update();
}

SnakeHead.prototype.update = function(){
  if(!game.gamePaused){
    this.location.add(this.velocity);
	this.location.add(this.velocity);
  }
}

SnakeHead.prototype.checkEdges = function(){
  let canvas = game.canvas;
  if(this.location.x + 20 > canvas.width || this.location.x - 20 < 0){
    this.velocity.x = -this.velocity.x;
  }
  if(this.location.y + 20 > canvas.height || this.location.y - 20 < 0){
    this.velocity.y = -this.velocity.y;
  }
}