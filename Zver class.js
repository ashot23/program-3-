var LivingCreature = require('./LivingCreature')

module.exports = class Zver extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 15;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(tiv, tiv1,tiv2) {
        this.getNewCoordinates()
            var found = [];
            for (var i = 0; i < this.directions.length; i++) {
        
                var x = this.directions[i][0];
                var y = this.directions[i][1];
        
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        
                    if (matrix[y][x] == tiv || matrix[y][x] == tiv1|| matrix[y][x] == tiv2) {
                        found.push(this.directions[i]);
                    }
                }
            }
            return found;
    }
    move() {
        var emptyCells = this.chooseCell(0, 1,0.5)
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
            this.energy--

        }
    }

    eat() {

        var emptyCells = this.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {

            var Newx = newCell[0]
            var Newy = newCell[1]

            matrix[Newy][Newx] = this.index
            matrix[this.y][this.x] = 0

            this.x = Newx
            this.y = Newy
            this.energy += 4
            for (var i in GrassEaterArr) {
                if (Newx == GrassEaterArr[i].x && Newy == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }

    mul() {
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.energy >= 30 && newCell) {
            var neweat = new Zver(newCell[0], newCell[1], this.index);
            zverArr.push(neweat);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 15;
        }
    }



    die() {
        if (this.energy <= (-20)) {
            var Newx = this.x;
            var Newy = this.y;
            matrix[this.y][this.x] = 0


            for (var i in zverArr) {
                if (Newx == zverArr[i].x && Newy == zverArr[i].y) {
                    zverArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}

