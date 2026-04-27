const channel = new BroadcastChannel("dj_channel");

function send(type, data){
  channel.postMessage({type, data});
}

channel.onmessage = (e)=>{
  console.log("Recebido:", e.data);
};
