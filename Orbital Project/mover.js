function Mover(x, y, dx, dy, r, c, n){
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.accel = new JSVector(0, 0);
  this.rad = r;
  this.orbitAngle = Math.random() * Math.PI;
  this.clr = c;
  this.orbiters = [];
  for(let i = 0; i < n; i++) {
    let a = i * (Math.PI * 2) / numOrbs + this.orbitAngle;
    let angleVel = numOrbs * 0.01;
    this.orbiters.push(new Orbiter(this, 4, 25, a, angleVel, this.clr));
  }
}

Mover.prototype.run = function(){
    
}

Mover.prototype.checkOverlapping = function(){

}

Mover.prototype.render = function(){

}

Mover.prototype.update = function(){
    
}

Mover.prototype.checkEdges = function(){
   
}

function Orbiter(){

}

Orbiter.prototype.update() = function(){

}

Orbiter.prototype.render() = function(){

}