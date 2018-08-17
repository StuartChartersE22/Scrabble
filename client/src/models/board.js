const Square = require('./square.js');

class Board {
  constructor() {
    this.squares = createSquares();
  };

  getTileByCoord(x, y) {
    const square = this.squares[y][x];
    return square.tile;
  };

}

module.exports = Board;

function createSquares() {
  const startRowArray = [];
  const mirrorLineArray = createMirrorLine();

  for (var i = 0; i < 7; i++) {
    const startColumnArray = [];

    for (var j = 0; j < 7; j++) {
      let square;
      if (i > j) {
        square = startRowArray[j][i];
      }else{
        // Logic for multipliers here
        square = new Square();
      };
      startColumnArray.push(square);
    };

    const correctColumnArray = startColumnArray.map(square => square);
    startColumnArray.reverse()
    correctColumnArray.push(mirrorLineArray[i]);
    console.log(startColumnArray.length);
    const columnArray = correctColumnArray.concat(startColumnArray);
    // console.log(columnArray.length);

    startRowArray.push(columnArray);
  };

  const correctRowArray = startRowArray.map(row => row);
  startRowArray.reverse();
  correctRowArray.push(mirrorLineArray);
  const rowArray = correctRowArray.concat(startRowArray);

  return rowArray;
};

function createMirrorLine() {
  const mirrorLineArray = [];
  for (var i = 0; i < 15; i++) {
    const square = new Square();
    mirrorLineArray.push(square);
  }
  console.log(mirrorLineArray.length);
  return mirrorLineArray;
}
