const canvas = document.getElementById("viz");
const ctx2 = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const analyser = ctx.createAnalyser();
analyser.fftSize = 256;

master.connect(analyser);

const data = new Uint8Array(analyser.frequencyBinCount);

function draw(){
  requestAnimationFrame(draw);

  analyser.getByteFrequencyData(data);

  ctx2.clearRect(0,0,canvas.width,canvas.height);

  let barWidth = (canvas.width / data.length) * 2;

  data.forEach((v,i)=>{
    let h = v * 2;

    let gradient = ctx2.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0, "#00eaff");
    gradient.addColorStop(1, "#0011ff");

    ctx2.fillStyle = gradient;

    ctx2.fillRect(i*barWidth, canvas.height-h, barWidth-2, h);
  });
}

draw();
