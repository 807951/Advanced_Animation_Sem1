//  Bubble constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, rad, clr, attract, repel){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(dx, dy);
    this.rad = rad;
    this.clr = clr;
    this.attract = attract;
    this.repel = repel;
}

  //  placing methods in the prototype (every bubble shares functions)
Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

// draw the bubble on the canvas
Mover.prototype.render = function(){
    let ctx = game.ctx;
    ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }

// attracting and repelling the normal balls
Mover.prototype.update = function()
    {
        if(!game.gamePaused) 
        { 
            // if the ball is not an attractor or repulson
            if((this.clr != "rgba(255,0,0)") && this.clr != "rgba(0,255,0)") 
            {
                // distance from the current bubble to the attractor
                distanceA = this.loc.distance(this.attract.loc);
                // distance from the current bubble to the repulsor
                distanceR = this.loc.distance(this.repel.loc);
                if(distanceA > distanceR) 
                {
                    this.accel = JSVector.subGetNew(this.loc, this.attract.loc);
                    this.accel.normalize();
                    this.accel.multiply(0.05);
                    this.accel.limit();
                    this.vel.add(this.accel);
                    this.vel.limit(3);
                    this.loc.add(this.vel);
                }
                else 
                {
                    this.accel = JSVector.addGetNew(this.loc, this.attract.loc);
                    this.accel.normalize();
                    this.accel.multiply(0.05);
                    this.accel.limit();
                    this.vel.add(this.accel);
                    this.vel.limit(3);
                    this.loc.add(this.vel);
                }
            }
            else 
            { 
                // if the bubble is an attractor of repulsor
                this.vel.dx = Math.random()  * 4 - 4;
                this.vel.dy = Math.random() * 4 - 4;
                this.loc.add(this.vel);
            }
        }
    }

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Mover.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if(this.loc.x > canvas.width)  this.loc.x = 0; // wrap around from right to left
    if(this.loc.x < 0)  this.loc.x = canvas.width; // wrap around from left to right
    if(this.loc.y > canvas.height)  this.loc.y = 0; // wrap around from bottom to top
    if(this.loc.y < 0)  this.loc.y = canvas.height; // wrap around from top to bottom
  }