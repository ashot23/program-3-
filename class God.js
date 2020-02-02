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
        var emptyCells = this.chooseCell(0, 1, 0.5)
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
            if (matrix[Newy][Newx] == 0.5) {
                matrix[this.y][this.x] = 0.5
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
        var news = empty[Math.floor(Math.random() * empty.length)]
        if (this.energy >= 10 && news) {
            var neweat = new Grass(news[0], news[1], 1);
            grassArr.push(neweat);
            matrix[news[1]][news[0]] = 1;
            this.energy = 0;
        }
        var Cells = this.chooseCell(0, 1, 0.5)
        var Newcell = Cells[Math.floor(Math.random() * Cells.length)]

        if (this.live >= 25 && Newcell) {

            var Neweat = new GrassEater(Newcell[0], Newcell[1], 2);
            GrassEaterArr.push(Neweat);
            matrix[Newcell[1]][Newcell[0]] = 2;

            this.live = 0



            if (this.stexcel >= 65 && Newcell) {

                var zvers = new Zver(Newcell[0], Newcell[1], 3);
                zverArr.push(zvers);
                matrix[Newcell[1]][Newcell[0]] = 3;

                this.stexcel = 0



            }



            if (this.vors >= 100 && Newcell) {
                var vorso = new Vorsord(Newcell[0], Newcell[1], 4);
                vorsordArr.push(vorso);
                matrix[Newcell[1]][Newcell[0]] = 4;

                this.vors = 0



            }
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

