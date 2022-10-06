const http=require("http");
const fs=require("fs");

let server= http.createServer((req,res)=>{
   
    if(req.url ==="/" || req.url==="/index.html"){
        let htmlcontent= fs.readFileSync("./index.html","utf-8");
        res.writeHead(200,{
            "Content-Type":"text/html"
        });
        res.write(htmlcontent);
        res.end();
    }
    else{
        fs.readFile("./"+req.url,"utf-8",function(error,data){
            if(error){
                res.writeHead(404,{
                    "Content-Type":"text/html"
                });
                res.end("<h1>404 : not found</h1>");
            }
            else{
                res.writeHead(200,{
                    "Content-Type":"text/html"
                });
                res.write(data);
                res.end();
            }
        });
    }
    
})
server.listen(2020,"localhost",function(error){
    if(error){
        console.log("Error ",error)
    }
    else{
        console.log("Sever is live at localhost:2020")
    }
})

           