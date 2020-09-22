var x, y, dx, dy, radius;
x = Math.random()*window.innerWidth;
y= Math.random()*window.innerHeight;
dx = Math.random()*10 - 5;
dy = Math.random()*10 - 5;
radius = 30;
function Ball(rad){
    this.radius = rad;
    this.getDiameter = function(){
       return this.radius*2;
     }
  }
