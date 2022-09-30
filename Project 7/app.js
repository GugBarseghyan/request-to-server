const express = require("express");
const server = express();
const fs = require("fs")

server.get("", function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/html",
    }); 
    let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8")
    myReadStream.pipe(res);
})

server.get('/randNum', (req, res) => {
    
    res.status(200).json({
      status: 'success',
      size: 7
        //random: "Math.floor(Math.random() * 7)"
    });
  });

server.listen(5555);