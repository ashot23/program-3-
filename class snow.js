var LivingCreature = require('./LivingCreature')
module.exports = class Snow extends LivingCreature {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0, 1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (this.multiply >= 8 && newCell) {
            var newSnow = new Snow(newCell[0], newCell[1], this.index);
            SnowArr.push(newSnow);
            matrix[newCell[1]][newCell[0]] = 0.5;
            this.multiply = 0;
            if (matrix[newCell[1]][newCell[0]] == 1) {
                var Newx = newCell[0];
                var Newy = newCell[1]
                matrix[this.y][this.x] = 0.5
                for (var i in grassArr) {
                    if (Newx == grassArr[i].x && Newy == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }

        }

    }
}





