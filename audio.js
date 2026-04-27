const ctx = new AudioContext();

let gainA = ctx.createGain();
let gainB = ctx.createGain();

function connect(audioA, audioB){
  const srcA = ctx.createMediaElementSource(audioA);
  const srcB = ctx.createMediaElementSource(audioB);

  srcA.connect(gainA).connect(ctx.destination);
  srcB.connect(gainB).connect(ctx.destination);
}

function crossfade(value){
  gainA.gain.value = 1 - value;
  gainB.gain.value = value;
}
