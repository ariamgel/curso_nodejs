const express = require('express');
const cors = require ("cors");

class Server {
    constructor(){
     this.app = express();
     this.port = process.env.PORT;
     this.rutasUsuarios = '/usuarios'

     this.middleware();
     this.routes();
    }

    middleware(){
     this.app.use(cors());
     this.app.use(express.json());
     this.app.use(express.static('public'));
    };

    routes() {
       this.app.use(this.rutasUsuarios, require('./routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port);
    }
}

module.exports = Server;