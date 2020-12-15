function Snake(x, y, dx, dy, clr, numSegments){
  this.snakeHead = new SnakeHead(x, y, dx, dy, 2, clr);
  r = Math.random()*255;
  g = Math.random()*255;
  b = Math.random()*255;
  this.clr = "rgba(" + r + ", "+ g + ","+ b +")"
  this.segments = [];
  this.numSegments = numSegments;
  this.rad = 3;
  let d = 40;
  for(let i = 0; i < this.numSegments;i++){
    this.segments[i] = new JSVector(x-d, y-d);
    d = d-40;
  }
  this.particleSystem = new ParticleSystem(this.snakeHead.location.x, this.snakeHead.location.y);
}

Snake.prototype.run = function(){
  this.snakeHead.run();
  this.particleSystem.run(this.snakeHead.location.x, this.snakeHead.location.y);
  this.update();
  this.render();
}

Snake.prototype.render = function(){
  let ctx = game.ctx;
  for(var i = 0; i < this.numSegments; i++){
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.segments[i].x, this.segments[i].y, this.rad, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}

Snake.prototype.update = function(){
  if(!game.gamePaused){
    for(let i = 0; i<this.numSegments;i++){
      if(i == 0){
        this.segments[i] = new JSVector(this.snakeHead.location.x, this.snakeHead.location.y);
      }
      else{
        let vB = JSVector.subGetNew(this.segments[i], this.segments[i-1]);
        vB.setMagnitude(this.segments.length);
        this.segments[i] = JSVector.addGetNew(this.segments[i-1], vB);
      }
    }
  }
}

Snake.prototype.addParticle = function(){
  this.particleSystem.addParticle();
}