function Mover(x, y, dx, dy, radius, clr, attract){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.accel = new JSVector(0, 0);
  /*if(attract != 0) {
    attract.toString();
  }*/
  this.attract = attract;
  this.radius = radius;
  this.clr = clr;
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
}

Mover.prototype.render = function(){
    let ctx = game.ctx;
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }

Mover.prototype.update = function(){
  let m = game.movers;
  if(this != m[0]) {
    this.accel = JSVector.subGetNew(this.attract.location, this.location);
    this.accel.normalize();
    this.accel.multiply(0.05);
  }
  if(!game.gamePaused){
    this.velocity.add(this.accel);
    this.velocity.limit(3);
    this.location.add(this.velocity);
  }
}

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Mover.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if (this.location.x + 15 > canvas.width || this.location.x < 15){
      this.velocity.x = -this.velocity.x;
    }
    if (this.location.y + 15 > canvas.height || this.location.y < 15){
      this.velocity.y = -this.velocity.y;
    }

}