function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //   create the array of bubble objects
    this.movers = [];
    let numMovers = 20;
    for(var i = 0; i < numMovers; i++){
        let x, y, dx, dy, diam, clr;
        if(i == 0) { // attractor
            x = Math.random()*this.canvas.width;
            y = Math.random()*this.canvas.height;
            dx = Math.random()* 6 - 3;
            dy = Math.random()* 6 - 3;
            diam = 12;
            clr = "rgba(255,0,0)"
            this.movers.push(new Mover(x, y, dx, dy, diam, clr, null, null)); // add new bubble to array
        } else if (i == 1) { // repulsor
            x = Math.random()*this.canvas.width;
            y = Math.random()*this.canvas.height;
            dx = Math.random()* 6 - 3;
            dy = Math.random()* 6 - 3;
            diam = 12;
            clr = "rgba(0,255,0)"
            this.movers.push(new Mover(x, y, dx, dy, diam, clr, null, null)); // add new bubble to array
        } else { // normal bubbles
            x = Math.random()*this.canvas.width;
            y = Math.random()*this.canvas.height;
            dx = Math.random()* 6 - 3;
            dy = Math.random()* 6 - 3;
            diam = 7;
            clr = "rgba(0,0,255)"
            this.movers.push(new Mover(x, y, dx, dy, diam, clr, this.movers[0], this.movers[1])); // add new bubble to array
        }
    }

    //  Add event handlers to all tile objects
    for(let i = 0; i < this.ga.tiles.length; i++){
        this.ga.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the game object
                                          this.style.backgroundColor = "#ac8fe3"
                                        },
                                        false);
        this.ga.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#d5dee0"
          },false);
        this.ga.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
    }

}//++++++++++++++++++++++  end Bubbles constructor

// function to run the game each animation cycle
Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();    // run each bubble
   }
  }
}