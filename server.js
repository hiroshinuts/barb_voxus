var http = require('http');
var app = require('./config/express');
db = require('./config/database');

http.createServer(app)
    .listen(3000, function(){
        console.log('Servidor iniciando');
    });