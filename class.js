class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.bazm = 0


        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x,     this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1,     this.y],
            [this.x + 1,     this.y],
            [this.x - 1, this.y + 1],
            [this.x,     this.y + 1],
            [this.x + 1, this.y + 1]
        ];



    }
    chooseCell() {
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];


            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.bazm++
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }








}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x,     this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1,     this.y],
            [this.x + 1,     this.y],
            [this.x - 1, this.y + 1],
            [this.x,     this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(tiv) {
        this.getNewCoordinates()
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];


            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == tiv) {
                    found.push(this.directions[i]);

                }

            }
        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)
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
    eat() {

        var emptyCells = this.chooseCell(1)
        var newCell = random(emptyCells)
        if (newCell) {

            var Newx = newCell[0]
            var Newy = newCell[1]

            matrix[Newy][Newx] = this.index
            matrix[this.y][this.x] = 0

            this.x = Newx
            this.y = Newy
            this.energy += 2

            for (var i in grassArr) {
                if (Newx == grassArr[i].x && Newy == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }





        }


    }


    mul() {

        var newCell = random(this.chooseCell(0));
        if (this.energy >= 12 && newCell) {
            var neweat = new GrassEater(newCell[0], newCell[1], this.index);
            GrassEaterArr.push(neweat);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 10;
        }




    }
    die() {
        if (this.energy <= (0)) {
            var Newx = this.x;
            var Newy = this.y;
            matrix[this.y][this.x] = 0


            for (var i in GrassEaterArr) {
                if (Newx == GrassEaterArr[i].x && Newy == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
        }



    }












}









class Zver {
    constructor(x, y, index) {

        this.x = x
        this.y = y
        this.energy = 15;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
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
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(tiv, tiv1) {
        this.getNewCoordinates()
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];


            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == tiv || matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

        var emptyCells = this.chooseCell(2)
        var newCell = random(emptyCells)
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

        var newCell = random(this.chooseCell(0));
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




class Vorsord {
    constructor(x, y, index) {

        this.x = x
        this.y = y
        this.energy = 10;
        this.index = index;
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
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == tiv || matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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






class God {
    constructor(x, y, index) {

        this.x = x
        this.y = y
        this.energy = 0;
        this.live = 0
        this.mah = 0
        this.span = 0
        this.stexcel = 0
        this.vors = 0
        this.index = index;
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
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == tiv || matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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