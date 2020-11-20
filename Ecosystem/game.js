function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    this.movers = [];
    this.createMovers(this.canvas, 20);
	
	
	this.ps1 = new ParticleSystem(this.canvas.width / 2, (this.canvas.height / 2) - 25, 1);
    this.ps2 = new ParticleSystem(this.canvas.width / 2, (this.canvas.height / 2) + 25, 2);
	
	var x, y, dx, dy
    x = Math.random() * this.canvas.width;
    y = Math.random() * this.canvas.height;
    dx = Math.random() * 6 - 3;
    dy = Math.random() * 6 - 3;
    this.snake = new Snake(15,x,y,dx,dy);
    //   create the array of bubble objects
	

}

// function to run the game each animation cycle
Game.prototype.run = function() {
  if (!this.gamePaused) {
    for(let i = 0; i < this.movers.length; i++) {
      this.movers[i].run();    // run each bubble
	}
	this.snake.run();
	this.ps1.run();
    this.ps2.run();
  }
}

Game.prototype.createMovers = function(canvas, numMovers){
    this.movers = [];
    for(var i = 0; i < numMovers; i++){
        var x, y, dx, dy, diam, clr, r, g, b, numOrbs;
        rad = 7;
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        dx = Math.random() * 2 - 1;
        dy = Math.random() * 2 - 1;
        r = Math.random() * 200 - 155;
        g = Math.random() + 155;
        b = Math.random() + 155;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        this.movers.push(new Mover(x, y, dx, dy, diam, clr)); 
    }
}
