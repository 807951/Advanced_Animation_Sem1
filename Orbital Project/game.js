function Game(){

    this.gamePaused = false;    
    this.ga = new GameArea();   
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d'); // This is the context
    this.createMovers(this.canvas, 55);

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
  
}

Game.prototype.createMovers() = function(canvas, numMovers){
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
        this.movers.push(new Bubble(x, y, dx, dy, diam, clr, numOrbs)); 
    }
}