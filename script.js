






var matrix = [];


var grassArr = [];
var GrassEaterArr = []
var zverArr = []
var vorsordArr = []
var medikArr = []


var side = 20
var chap = 30

function setup() {





    frameRate(5);

    background('#acacac');


    for (var y = 0; y <= chap; ++y) {
        matrix[y] = []

        for (var x = 0; x <= chap; ++x) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0,])

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







        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
}




function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {




            if (matrix[y][x] == 1) {

                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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



            rect(x * side, y * side, side, side);




        }
    }


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







}
