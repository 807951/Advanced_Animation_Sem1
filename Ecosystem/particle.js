function Particle(x, y, rad, clr, direction){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(Math.random()*2-1, Math.random()*2-1);
  this.direction = direction;
  this.uAccel = new JSVector(0, 0.1); // for the balls going up
  this.dAccel = new JSVector(0, -0.1); // for the balls going down
  this.lifespan = 60;
  this.radius = rad;
  this.clr = clr;
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.location.x, this.location.y, this.radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Particle.prototype.update = function(){
  if(this.direction == 1) { // goes down
    this.velocity.add(this.dAccel);
    this.location.add(this.velocity);
  } else { // goes up
    this.velocity.add(this.uAccel);
    this.location.add(this.velocity);
  }
  this.lifespan -= 1;
}

Particle.prototype.isDead = function(){
  if(this.lifespan < 0){
    return true;
  }
  else{
    return false;
  }
}