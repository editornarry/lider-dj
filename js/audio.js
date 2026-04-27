const ctx = new (window.AudioContext || window.webkitAudioContext)();

let gainA = ctx.createGain();
let gainB = ctx.createGain();
let master = ctx.createGain();

gainA.connect(master);
gainB.connect(master);
master.connect(ctx.destination);

function connectDecks(a, b){
  const srcA = ctx.createMediaElementSource(a);
  const srcB = ctx.createMediaElementSource(b);

  srcA.connect(gainA);
  srcB.connect(gainB);
}

function crossfade(x){
  // equal power curve
  gainA.gain.value = Math.cos(x * 0.5 * Math.PI);
  gainB.gain.value = Math.cos((1 - x) * 0.5 * Math.PI);
}

function setMaster(v){
  master.gain.value = v;
}
