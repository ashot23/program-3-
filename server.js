var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


matrix = [];
grassArr = [];
GrassEaterArr = []
zverArr = []
vorsordArr = []
medikArr = []
DemonArr = []


var chap = 30




var rand = [0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0] 
for (var y = 0; y <= chap; ++y) {
    matrix[y] = []

    for (var x = 0; x <= chap; x++) {
        matrix[y][x] = random_item(rand) 
        
    }
}

function demoncreate(){

    matrix[0].push(6)
    
    return matrix
    
    }
    
        
        
function random_item(items){
  
return items[Math.floor(Math.random()*items.length)];
     
}   
 


io.sockets.emit('send matrix', matrix)


Grass = require('./Grass class')
Vorsord = require('./Class Vorsord')
God = require('./class God')
Zver = require('./Zver class')
GrassEater = require('./Graseater class')
Demon = require('./Class Demon')
function create(matrix) {

    for (var y = 0; y <= chap; y++) {
        for (var x = 0; x <= chap; x++) {

    if (matrix[y][x] == 1) {
        var gr = new Grass(x, y, 1);
        grassArr.push(gr);
    }
    else if (matrix[y][x] == 2) {
        var eat = new GrassEater(x, y, 2)
        GrassEaterArr.push(eat)
    }
    else if (matrix[y][x] == 3) {
        var zver = new Zver(x, y, 3)
        zverArr.push(zver)

    }
    else if (matrix[y][x] == 4) {
        var vorsord = new Vorsord(x, y, 4)
        vorsordArr.push(vorsord)
    }
    else if (matrix[y][x] == 5) {
        var Medik = new God(x, y, 5)
        medikArr.push(Medik)
    }
    else if (matrix[y][x] == 6) {
        var Dem = new Demon(x, y, 6)
        DemonArr.push(Dem)
    }

 
        }
    }

    io.sockets.emit('send matrix', matrix)

}
function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
   for (var i in GrassEaterArr) {
        GrassEaterArr[i].move();
        GrassEaterArr[i].eat();
        GrassEaterArr[i].mul();
        GrassEaterArr[i].die();
    }
    for (var i in vorsordArr) {
        vorsordArr[i].move();
        vorsordArr[i].eat();
        vorsordArr[i].die();
    }
    for (var i in zverArr) {
        zverArr[i].move();
        zverArr[i].eat();
        zverArr[i].die();
    }
    for (var i in medikArr) {
        medikArr[i].move()
        medikArr[i].Create()
        medikArr[i].Kill()
        medikArr[i].die()
    }

    for (var i in DemonArr) {
        DemonArr[i].move()
        //DemonArr[i].Destroy()
        //DemonArr[i].die()
    }

    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function (socket) {
    create(matrix)
})
