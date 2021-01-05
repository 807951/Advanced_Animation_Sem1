function Particle(x, y, rad, clr){
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*3-1, Math.random()*3-1);
  this.lifeSpan = 250;
  this.radius = rad;
  r = Math.random()*255;
  g = Math.random()*255;
  b = Math.random()*255;
  
  this.clr = "rgba(" + r + ", "+ g + ","+ b +")";
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.update = function(){
  this.loc.add(this.vel);

  for(let i = 0; i < game.movers.length; i++){
    for(let j = 0; j < game.movers[i].orbiters.length; j++){
      let orb = game.movers[i].orbiters[j];
      if(this.loc.distance(orb.location) < this.radius + orb.radius){
        this.lifeSpan = -1;
      }
    }
  }

  for(let i = 0; i < game.movers.length; i++){
      if(this.loc.distance(game.movers[i].location) < this.radius + game.movers[i].radius){
		r = Math.random()*255;
		g = Math.random()*255;
		b = Math.random()*255;
		game.movers[i].clr = "rgba(" + r + ", "+ g + ","+ b +")";
      }
    }
  this.lifeSpan = this.lifeSpan-2;
}

Particle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

Particle.prototype.isDead = function(){
  if(this.lifeSpan < 0){
    return true;
  }else{
    return false;
  }
}