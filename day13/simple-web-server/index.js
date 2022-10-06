const { rmSync } = require("fs");
const http = require("http");

let server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<h1> Welcome to your life</h1>")
    res.end();
});

// server.on("connection",function(){
//     console.log("new user logged")
// });

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error", error)
    }else{
        console.log("server is now on localhost:1010");
    }
})