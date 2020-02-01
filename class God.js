var LivingCreature = require('./LivingCreature')

module.exports = class God extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 0;
        this.live = 0
        this.mah = 0
        this.span = 0
        this.stexcel = 0
        this.vors = 0
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

    chooseCell(tiv, tiv1, tiv2) {
        this.getNewCoordinates()
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == tiv || matrix[y][x] == tiv1 || matrix[y][x] == tiv2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var emptyCells = this.chooseCell(0, 1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            var Newx = newCell[0]
            var Newy = newCell[1]
            if (matrix[Newy][Newx] == 0) {
                matrix[this.y][this.x] = 0
                matrix[Newy][Newx] = this.index
            }
            if (matrix[Newy][Newx] == 1) {
                matrix[this.y][this.x] = 1
                matrix[Newy][Newx] = this.index
            }
            this.x = Newx
            this.y = Newy
        }
    }
    Create() {
        this.energy++
        this.live++
        this.stexcel++
        this.vors++
        var empty = this.chooseCell(0)
        var newCel = empty[Math.floor(Math.random() * empty.length)]
        if (this.energy >= 10 && newCel) {
            var neweat = new Grass(newCel[0], newCel[1], 1);
            grassArr.push(neweat);
            matrix[newCel[1]][newCel[0]] = 1;
            this.energy = 0;
        }
        var emptyCells = this.chooseCell(0, 1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.live >= 25 && newCell) {
            var Neweat = new GrassEater(newCell[0], newCell[1], 2);
            GrassEaterArr.push(Neweat);
            matrix[newCell[1]][newCell[0]] = 2;

            this.live = 0
        }

        var Cells = this.chooseCell(0, 1, 2)
        var newe = Cells[Math.floor(Math.random() * Cells.length)]
        var Newx = newe[0];
        var Newy = newe[1];
        if (this.stexcel >= 65 && newe) {
            if (matrix[Newy][Newx] == 0) {
                var pred = new Zver(Newx, Newy, 3);
                zverArr.push(pred);
                matrix[Newy][Newy] = 3;

                this.stexcel = 0
            }
            if (matrix[Newy][Newx] == 1) {

                for (var i in grassArr) {
                    if (Newx == grassArr[i].x && Newy == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;

                    }
                }

                var zve = new Zver(Newx, Newy, 3);
                zverArr.push(zve);
                matrix[Newy][Newy] = 3;

                this.stexcel = 0

            }


        }




        if (matrix[Newy][Newx] == 2) {

            for (var i in GrassEaterArr) {
                if (Newx == GrassEaterArr[i].x && Newy == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;

                }
            }
            var zver = new Zver(Newx, Newy, 3);
            zverArr.push(zver);
            matrix[Newy][Newy] = 3;
            this.stexcel = 0
        }

        if (this.vors >= 100 && newe) {
            var vors = new Vorsord(newCell[1], newCell[0], 4)
            vorsordArr.push(vors)
            matrix[newCell[0]][newCell[1]]
            this.vors = 0
        }

    }
    die() {

        this.mah++
        if (this.mah >= 300) {
            var Newx = this.x;
            var Newy = this.y;
            matrix[this.y][this.x] = 0


            for (var i in medikArr) {
                if (Newx == medikArr[i].x && Newy == medikArr[i].y) {
                    medikArr.splice(i, 1);
                    break;
                }
            }
            this.mah = 0
        }
    }

    Kill() {
        this.span++
        var emptyCells = this.chooseCell(4)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.span == 120 && newCell) {
            var Newx = newCell[0]
            var Newy = newCell[1]

            matrix[Newy][Newx] = this.index
            matrix[this.y][this.x] = 0
            this.x = Newx
            this.y = Newy
            for (var i in vorsordArr) {
                if (Newx == vorsordArr[i].x && Newy == vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                    break;
                }
            }
            this.span = 0
            this.mah -= 10
        }
    }
}

