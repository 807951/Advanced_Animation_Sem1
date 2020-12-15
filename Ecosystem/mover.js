function Mover(x, y, dx, dy, radius, clr, numOrbs){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.acceleration = new JSVector(0, 0);
  this.radius = radius;
  this.orbitAngle = Math.random()*Math.PI;
  
  r = Math.random()*255;
  g = Math.random()*255;
  b = Math.random()*255;
  
  this.clr = "rgba(" + r + ", "+ g + ","+ b +")";
  
  this.orbiters = [];
  
  this.orbitclr = "rgba(" + r + ", "+ g + ","+ b +")";
  
   for(let i = 0; i<numOrbs; i++){
     let a = i*(Math.PI*2)/numOrbs + this.orbitAngle;
     let angleVel = numOrbs*0.015;
     this.orbiters.push(new Orbiter(this, 15, 75, a, angleVel, this.orbitclr));
   }
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    for(let i=0; i<this.orbiters.length;i++){
      let orb = this.orbiters[i];
      orb.update();
      orb.render();
    }
}
Mover.prototype.render = function(){
    let ctx = game.ctx;
    let b = game.movers;
	r = Math.random()*255;
  g = Math.random()*255;
  b = Math.random()*255;
  
  this.clr = "rgba(" + r + ", "+ g + ","+ b +")";
        ctx.strokeStyle = this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
  }

Mover.prototype.update = function(){
    if(!game.gamePaused){
      this.velocity.add(this.acceleration);
	  this.velocity.add(this.acceleration);
      this.velocity.limit(20);
      this.location.add(this.velocity);
    }
}
Mover.prototype.checkEdges = function(){
  let canvas = game.canvas;
  if(this.location.x + 120 > canvas.width || this.location.x - 120 < 0){
    this.velocity.x = -this.velocity.x;
  }
  if(this.location.y + 120 > canvas.height || this.location.y - 120 < 0){
    this.velocity.y = -this.velocity.y;
  }
}