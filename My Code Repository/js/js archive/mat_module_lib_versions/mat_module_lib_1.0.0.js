document.onkeydown = checkKey;
/*
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}
*/
// ==== MATH FUNCTIONS ====
/*
function fun1(x) {var hello = 6*Math.exp(x); return hello;}
function fun2(x) {var hello1 = Math.pow((Math.tan((Math.cos(6/x)*Math.cos(2*Math.cos((x/Math.PI)))))),Math.sin(x)); return hello1;}
*/
// ==== Objects ====

class Queen extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    this.letter = "Q";
    if (isWhite) {
      this.pic = images[1];

    } else {
      this.pic = images[7];
    }
    this.value = 9;

  }
  canMove(x, y, board) {
    if (!this.withinBounds(x, y)) {
      return false;
    }
    if (this.attackingAllies(x, y, board)) {
      return false;
    }

    if (x == this.matrixPosition.x || y == this.matrixPosition.y) {
      if (this.moveThroughPieces(x, y, board)) {
        return false;
      }

      return true;
    }
    //diagonal
    if (abs(x - this.matrixPosition.x) == abs(y - this.matrixPosition.y)) {
      if (this.moveThroughPieces(x, y, board)) {
        return false;
      }

      return true;
    }
    return false;
  }
  generateMoves(board) {
    var moves = [];

    //generateHorizontal moves
    for (var i = 0; i < 8; i++) {
      var x = i;
      var y = this.matrixPosition.y;
      if (x != this.matrixPosition.x) {
        if (!this.attackingAllies(x, y, board)) {
          if (!this.moveThroughPieces(x, y, board)) {
            moves.push(createVector(x, y));
          }
        }
      }
    }
    //generateVertical moves
    for (var i = 0; i < 8; i++) {
      var x = this.matrixPosition.x;;
      var y = i;
      if (i != this.matrixPosition.y) {
        if (!this.attackingAllies(x, y, board)) {
          if (!this.moveThroughPieces(x, y, board)) {
            moves.push(createVector(x, y));
          }
        }
      }
    }

    //generateDiagonal Moves
    for (var i = 0; i < 8; i++) {
      var x = i;
      var y = this.matrixPosition.y - (this.matrixPosition.x - i);
      if (x != this.matrixPosition.x) {
        if (this.withinBounds(x, y)) {
          if (!this.attackingAllies(x, y, board)) {
            if (!this.moveThroughPieces(x, y, board)) {
              moves.push(createVector(x, y));
            }
          }
        }
      }
    }

    for (var i = 0; i < 8; i++) {
      var x = this.matrixPosition.x + (this.matrixPosition.y - i);
      var y = i;
      if (x != this.matrixPosition.x) {
        if (this.withinBounds(x, y)) {
          if (!this.attackingAllies(x, y, board)) {
            if (!this.moveThroughPieces(x, y, board)) {
              moves.push(createVector(x, y));
            }
          }
        }
      }
    }
    //print("Queen", moves);
    return moves;
  }
  clone() {
    var clone = new Queen(this.matrixPosition.x, this.matrixPosition.y,
      this.white);
    clone.taken = this.taken;
    return clone;

  }
}