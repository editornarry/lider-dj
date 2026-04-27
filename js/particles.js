const particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*window.innerWidth,
    y: Math.random()*window.innerHeight,
    vx: Math.random()*0.5,
    vy: Math.random()*0.5
  });
}

function drawParticles(ctx){
  particles.forEach(p=>{
    p.x += p.vx;
    p.y += p.vy;

    ctx.fillStyle = "rgba(0,255,255,0.3)";
    ctx.fillRect(p.x, p.y, 2, 2);
  });
}
