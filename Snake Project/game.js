function Game(){

    this.gamePaused = false;    
    this.ga = new GameArea();   
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.movers = [];
    let numMovers = 51;
    for(var i = 0; i < numMovers; i++){
        var x, y, dx, dy, diam, clr, r, g, b;
        x = this.canvas.width/2;
        y = this.canvas.height/2;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
        diam = 10;
        r = 255;
        g = 255;
        b = 255;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        if (i = 0){
            this.movers.push(new Mover(Math.random() * canvas.width, Math.random() * canvas.height, 0, 0, 20, "rgba(0,255,0)", 0));
        }
        else{
             this.movers.push(new Mover(x, y, dx, dy, diam, clr, this.movers[i-1])); 
        }
    }
    for(let i = 0; i < this.ga.tiles.length; i++){
        this.ga.tiles[i].addEventListener('mouseover', 
                                        function(){
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

}

Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();    // run each bubble
   }
  }
}