var http = require("http");
var fs = require("fs")

http.createServer(function(req,res){
    // res.writeHead(200,{"Content-Type":"text/html"});//html
    res.writeHead(200,{"Content-Type":"application/json"});
    // var data= fs.readFileSync(__dirname + "/index.html","utf-8")
    // data= data.replace("{NAME}","HUYHOANG")
    fs.createReadStream(__dirname + "/index.html").pipe(res)
    ;

    // res.end(data)



    var obj={
        ho: 'le',
        ten:'hoang',
        namsinh:2001
    }
    res.end(JSON.stringify(obj));
}).listen(7777);