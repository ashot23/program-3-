var socket = io()

var side = 20
var chap = 20

function setup() {
    createCanvas(chap * side, chap * side);
    background('#acacac');
}


function nkarel(matrix) {
    for (var y = 0; y <= chap; y++) {
        for (var x = 0; x <= chap; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac')

            }

            else if (matrix[y][x] == 0.5) {
                fill('white')

            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }

            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else if (matrix[y][x] == 6) {
                fill('#383235')
            }



            rect(x * side, y * side, side, side);




        }
    }
}
setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)


function summer(){

    socket.emit("summer")

}

function snow() {
    socket.emit("snow")
}
function demoncreate() {
    socket.emit("demoncreate")


}
function live() {

    socket.emit('live')

}