var socket = io()

var side = 20


function setup() {
    createCanvas(30 * side, 30 * side);
    background('#acacac');
}

col = ['#acacac', 'white']


function nkarel(matrix) {
    for (var y = 0; y < 31; y++) {
        for (var x = 0; x < 31; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill(col[0])

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
                fill('#541212')
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




function snow() {
    socket.emit("snow")
}
function demoncreate() {
    socket.emit("demoncreate")


}
function live() {

    socket.emit('live')

}