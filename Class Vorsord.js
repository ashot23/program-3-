 class Vorsord extends LivingCreature {
 constructor(x, y, index) {
super(x,y,index)
        this.energy = 10;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x,     this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x,     this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x,     this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3,     this.y],
            [this.x - 2,     this.y],
            [this.x - 1,     this.y],
            [this.x + 1,     this.y],
            [this.x + 2,     this.y],
            [this.x + 3,     this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x,     this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x,     this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x,     this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
        ];
    }

    chooseCell(tiv, tiv1) {
        this.getNewCoordinates()
      return super.chooseCell(tiv,tiv1)
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
            this.energy--
        }
    }

    eat() {

        var emptyCells = this.chooseCell(3, 2)
        var newCell = random(emptyCells)
        if (newCell) {
            var Newx = newCell[0]
            var Newy = newCell[1]
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
            matrix[Newy][Newx] = this.index
            matrix[this.y][this.x] = 0
            this.x = Newx
            this.y = Newy
            this.energy += 4
        }
    }

    die() {
        if (this.energy <= (-10)) {
            var Newx = this.x;
            var Newy = this.y;
            matrix[this.y][this.x] = 0
            for (var i in vorsordArr) {
                if (Newx == vorsordArr[i].x && Newy == vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}



module.exports.Vorsord=Vorsord