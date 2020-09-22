var canvas;
var ctx;
//  intialize the Canvas and context
window.onload = init;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,24,35)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate();
}

function animate(){
  requestAnimationFrame(animate); //  We are calling the animate function from 
//  inside of the animate function
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  updateGame();
}

