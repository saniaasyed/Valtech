const fs = require("fs");

// fs.writeFileSync("temp.txt","welcome to your life","utf-8");

/*
fs.writeFile("temp.txt","welcome to your life","utf-8",function(error,data){
    if(error){
        console.log("Error", error)
    }
    else{
        console.log("the file is created");
    }
});
*/

// console.log(fs.readFileSync("temp.txt","utf-8"));

// console.log(fs.readFileSync("temp.txt","utf-8",function(error,data){
//     if(error){
//         console.log("Error", error)
//     }
//     else{
//         console.log("the file is created");
//     }
// }));

fs.watchFile("temp.txt",function(){
    console.log("file updated");
})
setInterval(function(){
    fs.appendFile("temp.txt", "\nhello","utf-8",function(err,data){
        if(err){console.log("error",err)}
        else{console.log("content is added")}
    })
},1000)