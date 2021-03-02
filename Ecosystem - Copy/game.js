function Game(){
    this.gamePaused = false;   
    this.ga = new GameArea();  
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); 
    this.movers = [];
    this.createMovers(this.canvas, 10);

    this.moons = [];
    let numMoons = 75;
    for(var i = 0; i < numMoons; i++){
        var x, y, dx, dy, clr, r, g, b;
        x = Math.random()*(this.canvas.width - 40) + 20;
        y = Math.random()*(this.canvas.height - 40) + 20;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
		r = Math.random()*200+55;
		g = Math.random()*155;
		b = Math.random()*155;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        this.moons.push(new Moon(x, y, dx, dy, clr));
      }

      this.vehicles = [];
      this.numVehicles = 75;
      for(let i = 0; i < this.numVehicles; i++){
        this.vehicles.push(new Vehicle(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }

      this.snakes = [];
      this.createSnakes(this.canvas, 50);

      function createParticle(){
        for(let i = 0; i < game.snakes.length; i++){
          game.snakes[i].addParticle();
        }
      }
        setInterval(createParticle,200);
}

Game.prototype.run = function(){
     for(let i = 0; i < this.moons.length; i++){
     this.moons[i].run();
    }
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();
    }
    for(let i = 0; i < this.snakes.length; i++){
      this.snakes[i].run();
    }
    for(let i = 0; i < this.numVehicles; i++){
      this.vehicles[i].run(this.vehicles);    //stars
    }
  }

Game.prototype.createMovers = function(canvas, numMovers){
  for(var i = 0; i<numMovers;i++){
    var x, y, dx, dy, radius, clr, r, g, b, numOrbs;
    radius = 15;
    x = Math.random()*this.canvas.width;
    y = Math.random()*this.canvas.height;
    dx = Math.random()*6-3;
    dy = Math.random()*6-3;
	r = Math.random()*200+55;
    g = Math.random()*155;
    b = Math.random()*155;
    clr = "rgba(" + r + ", " + g + "," + b +")"
    numOrbs = 50;
    this.movers.push(new Mover(x, y, dx, dy, radius, clr, numOrbs));
  }
}

Game.prototype.createSnakes = function(canvas, numSnakes){
  for(var i = 0; i < numSnakes; i++){
    var x, y, dx, dy, r, g, b, clr, numSegments;
    x = this.canvas.width/2;
    y = canvas.height/2;
    dx = Math.random()*6-3;
    dy = Math.random()*6-3;
    r = Math.random()*200+55;
    g = Math.random()*155;
    b = Math.random()*155;
    clr = "rgba(" + r + ", " + g + "," + b +")"
    numSegments = 7;
    this.snakes.push(new Snake(x, y, dx, dy, clr, numSegments));
  }
}