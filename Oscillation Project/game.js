function Game(){

    this.gamePaused = false;   
    this.ga = new GameArea();
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); 
    this.balls = [];
    let numBalls = 10;
    for(var i = 0; i < numBalls; i++){
        this.balls.push(new Oscillator());
    }


}

Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.balls.length; i++){
      this.balls[i].run();
    }
  }
}