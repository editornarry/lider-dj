const ctx = new (window.AudioContext || window.webkitAudioContext)();

let gainA = ctx.createGain();
let gainB = ctx.createGain();
let master = ctx.createGain();

let analyser = ctx.createAnalyser();
analyser.fftSize = 256;

gainA.connect(master);
gainB.connect(master);
master.connect(analyser);
analyser.connect(ctx.destination);

function connectDecks(a, b){
  const srcA = ctx.createMediaElementSource(a);
  const srcB = ctx.createMediaElementSource(b);

  srcA.connect(gainA);
  srcB.connect(gainB);
}

function crossfade(x){
  gainA.gain.value = Math.cos(x * 0.5 * Math.PI);
  gainB.gain.value = Math.cos((1 - x) * 0.5 * Math.PI);
}

function setMaster(v){
  master.gain.value = v;
}

function getAnalyser(){
  return analyser;
}
