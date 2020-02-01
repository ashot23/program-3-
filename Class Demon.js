

var LivingCreature = require('./LivingCreature')
module.exports = class Demon extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 5, this.y - 5],
            [this.x - 4, this.y - 5],
            [this.x - 3, this.y - 5],
            [this.x - 2, this.y - 5],
            [this.x - 1, this.y - 5],
            [this.x, this.y - 5],
            [this.x + 1, this.y - 5],
            [this.x + 2, this.y - 5],
            [this.x + 3, this.y - 5],
            [this.x + 4, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y - 4],
            [this.x - 4, this.y - 4],
            [this.x - 3, this.y - 4],
            [this.x - 3, this.y - 4],
            [this.x - 2, this.y - 4],
            [this.x - 1, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 1, this.y - 4],
            [this.x + 2, this.y - 4],
            [this.x + 3, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x + 5, this.y - 4],
            [this.x - 5, this.y - 4],
            [this.x - 4, this.y - 3],
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x + 4, this.y - 3],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 2],
            [this.x - 4, this.y - 2],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x + 4, this.y - 2],
            [this.x + 5, this.y - 2],
            [this.x - 5, this.y - 1],
            [this.x - 4, this.y - 1],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x + 4, this.y - 1],
            [this.x + 5, this.y - 1],
            [this.x - 5, this.y],
            [this.x - 4, this.y],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y + 1],
            [this.x - 4, this.y + 1],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x + 4, this.y + 1],
            [this.x + 5, this.y + 1],
            [this.x - 5, this.y + 2],
            [this.x - 4, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x + 4, this.y + 2],
            [this.x + 5, this.y + 2],
            [this.x - 5, this.y + 3],
            [this.x - 4, this.y + 3],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 3],
            [this.x + 5, this.y + 3],
            [this.x - 5, this.y + 4],
            [this.x - 4, this.y + 4],
            [this.x - 3, this.y + 4],
            [this.x - 2, this.y + 4],
            [this.x - 1, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 1, this.y + 4],
            [this.x + 2, this.y + 4],
            [this.x + 3, this.y + 4],
            [this.x + 4, this.y + 4],
            [this.x + 5, this.y + 4],
            [this.x - 5, this.y + 5],
            [this.x - 4, this.y + 5],
            [this.x - 3, this.y + 5],
            [this.x - 2, this.y + 5],
            [this.x - 1, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 1, this.y + 5],
            [this.x + 2, this.y + 5],
            [this.x + 3, this.y + 5],
            [this.x + 4, this.y + 5],
            [this.x + 5, this.y + 5],
        ];


    }
    chooseCell(tiv, tiv1, tiv2, tiv3, tiv4) {
        this.getNewCoordinates()

        var found = [];
        for (var i = 0; i < this.directions.length; i++) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == tiv || matrix[y][x] == tiv1 || matrix[y][x] == tiv2 || matrix[y][x] == tiv3 || matrix[y][x] == tiv4) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            var Newx = newCell[0]
            var Newy = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[Newy][Newx] = this.index

            this.x = Newx
            this.y = Newy
            this.energy--

        }
    }

    Destroy() {


        var emptyCells = this.chooseCell(1, 2, 3, 4, 5)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            var Newx = newCell[0]
            var Newy = newCell[1]

            if (matrix[Newy][Newx] == 1) {
                for (var i in grassArr) {
                    if (Newx == grassArr[i].x && Newy == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }


            if (matrix[Newy][Newx] == 2) {
                for (var i in GrassEaterArr) {
                    if (Newx == GrassEaterArr[i].x && Newy == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }

            if (matrix[Newy][Newx] == 3) {
                for (var i in zverArr) {
                    if (Newx == zverArr[i].x && Newy == zverArr[i].y) {
                        zverArr.splice(i, 1);
                        break;
                    }
                }

            }


            if (matrix[Newy][Newx] == 4) {
                for (var i in vorsordArr) {
                    if (Newx == vorsordArr[i].x && Newy == vorsordArr[i].y) {
                        vorsordArr.splice(i, 1);
                        break;
                    }
                }

            }

            if (matrix[Newy][Newx] == 5) {
                for (var i in medikArr) {
                    if (Newx == medikArr[i].x && Newy == medikArr[i].y) {
                        medikArr.splice(i, 1);
                        break;
                    }
                }

            }



            matrix[Newy][Newx] = this.index
            matrix[this.y][this.x] = 0
            this.x = Newx
            this.y = Newy

        }
    }
}
