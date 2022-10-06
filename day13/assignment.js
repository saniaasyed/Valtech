var count=0
const EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();
myEvent.addListener("valtech",function(){
    console.log("valtech event happened");
});
var ci = setInterval(function(){
    if(count<5){
    myEvent.emit("valtech");
    count++;
}
else{
    clearInterval(ci);
}
},1000)
