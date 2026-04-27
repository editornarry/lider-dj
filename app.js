const deckA = document.getElementById("deckA");
const deckB = document.getElementById("deckB");

connect(deckA, deckB);

document.getElementById("cross").oninput = e=>{
  crossfade(e.target.value);
};

document.getElementById("openScreen").onclick = ()=>{
  window.open("screen.html");
};

document.getElementById("sendMsg").onclick = ()=>{
  send("msg", document.getElementById("msg").value);
};
