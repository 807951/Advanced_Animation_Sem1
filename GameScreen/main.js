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
  requestAnimationFrame(animate);
}

