const express = require('express');

class Server {
    constructor(){
     this.app = express();
     this.port = process.env.PORT;

     this.routes();
    }

    routes() {
        this.app.get('/', function(req, res){ 
            res.send('Hola que tengas un estupendo día');
        });
    }

    listen(){
        this.app.listen(this.port);
    }
}

module.exports = Server;