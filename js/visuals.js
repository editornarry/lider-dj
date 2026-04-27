const canvas = document.getElementById("viz");
const ctx2 = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const analyser = getAnalyser();
const data = new Uint8Array(analyser.frequencyBinCount);

function draw(){
  requestAnimationFrame(draw);

  analyser.getByteFrequencyData(data);

  ctx2.clearRect(0,0,canvas.width,canvas.height);

  let barWidth = canvas.width / data.length;

  data.forEach((v,i)=>{
    let h = v * 2;

    ctx2.fillStyle = `hsl(${i*2}, 100%, 50%)`;

    ctx2.fillRect(i*barWidth, canvas.height-h, barWidth-2, h);
  });
}

draw();
