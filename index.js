const express = require("express")
const parseString = require('xml2js').parseString
const authorize = require("./authorize")

let app = express()

app.get("/",function(req,res){
    console.log("11111");
    let echostr = req.query.echostr;//随机字符串
    if(echostr){
        authorize(req,res);
    }else{
        console.log("xiaoxi");
    }
    
})

app.post("/",function(req,res){
  
  
    
})

app.listen(80)

console.log("hello server");

// parseString(xml, function (err, result) {
//     console.dir(JSON.stringify(result));
// });
