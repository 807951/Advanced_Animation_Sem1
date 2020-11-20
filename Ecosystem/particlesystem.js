function ParticleSystem(x, y, direction){
  this.particles = [];
  this.direction = direction;
  this.loc = new JSVector(x, y);
}

ParticleSystem.prototype.run = function(){
  this.addParticle();
  this.update(); 
}

ParticleSystem.prototype.addParticle = function(){
  let rad = 20;
  let clr = "rbga(255, 255, 255)"
  this.particles.push(new Particle(this.loc.x, this.loc.y, rad, clr, this.direction));
}

ParticleSystem.prototype.update = function(){
  for(var i = this.particles.length - 1;i >= 0; i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead()){
      this.particles.splice(i, 1);
    }
  }
}