const express = require('express');
const server = express();
const fs = require("fs");

server.get('/factNum', (req, res) => {
    res.status(200).json({
      status: 'success',
      fact: 8
    });
  });

server.get("", function(req , res){
    res.writeHead(200, {
        "Content-Type": "text/html",
    }); 
    let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8")
    myReadStream.pipe(res);
});

server.listen(3000);