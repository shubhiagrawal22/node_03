const http = require("node:http");

const server =  http.createServer(function (req, res) {

    if(req.url === "/troll") {
        res.end("Troll dead");
    }
    res.end("Wingardium LeviOsa"); //data sent back to user

});

server.listen(3333); //listen to request from user

//running this will start server it waits for request can access through localhost