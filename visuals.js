const canvas = document.getElementById("viz");
const ctx2 = canvas.getContext("2d");

function draw(){
  ctx2.clearRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<50;i++){
    let h = Math.random()*200;
    ctx2.fillStyle = "cyan";
    ctx2.fillRect(i*10, 200-h, 5, h);
  }

  requestAnimationFrame(draw);
}
draw();
