const channel = new BroadcastChannel("lider_dj");

function send(type,data){
  channel.postMessage({type,data});
}
