const deckA = document.getElementById("deckA");
const deckB = document.getElementById("deckB");

connectDecks(deckA, deckB);

document.getElementById("cross").oninput = e=>{
  crossfade(e.target.value);
};

document.getElementById("master").oninput = e=>{
  setMaster(e.target.value);
};

document.getElementById("openScreen").onclick = ()=>{
  window.open("screen.html");
};

document.getElementById("sendMsg").onclick = ()=>{
  send("msg", document.getElementById("msg").value);
};
document.body.addEventListener("click", () => {
  ctx.resume();
}, { once: true });
