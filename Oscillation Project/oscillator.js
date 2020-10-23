function Oscillator(){
    this.angle = new JSVector();
    this.velocity = new JSVector(Math.random() * 0.06 - 0.03, Math.random() * 0.06 - 0.03);
    this.amplitude = new JSVector(Math.random() * canvas.width / 2, Math.random() * canvas.height / 2);
  }

  Oscillator.prototype.run = function(){
      this.oscillate();
      this.display();
    }

  Oscillator.prototype.oscillate = function(){
    this.angle.add(this.velocity);
  }

 Oscillator.prototype.display = function(){
    let ctx = game.ctx; ;
    this.x = Math.sin(this.angle.x) * this.amplitude.x;
    this.y = Math.sin(this.angle.y) * this.amplitude.y;
    ctx.strokeStyle = "rgba(255, 0, 0, 255)"
    ctx.save();
    ctx.beginPath();
    ctx.translate(canvas.width / 2 ,canvas.height / 2);
    ctx.lineTo(0 ,0);
    ctx.arc(this.x, this.y, 15, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

}