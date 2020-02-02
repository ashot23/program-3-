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
SnowArr = []
GrassEaterArr = []
zverArr = []
vorsordArr = []
medikArr = []
DemonArr = []


var chap = 20




var rand = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,5]
for (var y = 0; y <= chap; ++y) {
    matrix[y] = []

    for (var x = 0; x <= chap; x++) {
        matrix[y][x] = random_item(rand)

    }
}




function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}



io.sockets.emit('send matrix', matrix)

Snow = require('./class snow')
Grass = require('./Grass class')
Vorsord = require('./Class Vorsord')
God = require('./class God')
Zver = require('./Zver class')
GrassEater = require('./Graseater class')
Demon = require('./Class Demon')

function create(matrix) {

    for (var y = 0; y <= chap; y++) {
        for (var x = 0; x <= chap; x++) {

            if (matrix[y][x] == 0.5) {
                var sn = new Snow(x, y, 0.5);
                SnowArr.push(sn);
            }

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
    for (var i in SnowArr) {
        SnowArr[i].mul()
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
        DemonArr[i].Destroy()
    }

    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000)

function snow() {
    for (var i = 0; i < 50; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 0.5
            var sn = new Snow(x, y, 0.5)
            SnowArr.push(sn)
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function summer() {
SnowArr = []
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == (0.5)) {
                matrix[y][x] = 1
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }


        }

    }
    io.sockets.emit("send matrix", matrix);

}


function demoncreate() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                var Dem = new Demon(x, y, 6);
                DemonArr.push(Dem);
                matrix[y][x] = 6;
                break;
            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function live() {
    DemonArr = []
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 6) {
                matrix[y][x] = 5;
                var Med = new God(x, y, 5)
                medikArr.push(Med)

            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}



io.on('connection', function (socket) {
    create(matrix)
    socket.on("demoncreate", demoncreate);
    socket.on("live", live);
    socket.on("snow", snow);
    socket.on('summer',summer)
})

var statistics = {};

setInterval(function () {
    statistics.Grass = grassArr.length;
    statistics.GrassEater = GrassEaterArr.length;
    statistics.Zver = zverArr.length;
    statistics.Vorsord = vorsordArr.length;
    statistics.God = medikArr.length;
    statistics.Demon = DemonArr.length;
    statistics.Snow = SnowArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
    })
}, 1000)