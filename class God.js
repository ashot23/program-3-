class God extends LivingCreature {
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
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y - 2],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x + 4, this.y - 2],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y - 1],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x + 4, this.y - 1],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y + 1],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x + 4, this.y + 1],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x + 4, this.y + 2],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y + 3],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 3],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y - 4],
            [this.x - 4, this.y + 4],
            [this.x - 3, this.y + 4],
            [this.x - 2, this.y + 4],
            [this.x - 1, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 1, this.y + 4],
            [this.x + 2, this.y + 4],
            [this.x + 3, this.y + 4],
            [this.x + 4, this.y + 4],
            [this.x + 5, this.y - 5],
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

    chooseCell(tiv, tiv1) {
        this.getNewCoordinates()    
        return super.chooseCell(tiv,tiv1);
    }

    move() {
        var emptyCells = this.chooseCell(0, 1)
        var newCell = random(emptyCells)
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

        var newCell = random(this.chooseCell(0));
        if (this.energy >= 10 && newCell) {
            var neweat = new Grass(newCell[0], newCell[1], 1);
            grassArr.push(neweat);
            matrix[newCell[1]][newCell[0]] = 1;
            this.energy = 0;
        }
        var Newcell = random(this.chooseCell(0, 1));
        if (this.live >= 25 && Newcell) {

            var Neweat = new GrassEater(Newcell[0], Newcell[1], 2);
            GrassEaterArr.push(Neweat);
            matrix[Newcell[1]][Newcell[0]] = 2;

            this.live = 0
        }

        var Newcel = random(this.chooseCell(0, 1));
        if (this.stexcel >= 65 && Newcel) {

            var zvers = new Zver(Newcel[0], Newcel[1], 3);
            zverArr.push(zvers);
            matrix[Newcel[1]][Newcel[0]] = 3;

            this.stexcel = 0
        }

        var Newcl = random(this.chooseCell(0, 1));
        if (this.vors >= 100 && Newcl) {
            var vorso = new Vorsord(Newcl[0], Newcl[1], 4);
            vorsordArr.push(vorso);
            matrix[Newcl[1]][Newcl[0]] = 4;

            this.vors = 0
        }
    }
    die() {

        this.mah++
        if (this.mah >= (300)) {
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
        var newCell = random(emptyCells)
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

module.exports.God=God