var sudoku = [];

function createSudoku() {
for (var x=1; x < 10; x++) {
  for (var y=1; y < 10; y++) {
    coordinateX = parseInt(x);
    //console.log(coordinateX);
    coordinateY = parseInt(y);
    //console.log(coordinateY);
    //sudoku += "x" + coordinateX;
    //sudoku += "y" + coordinateY;
    sudoku.push(y);

  }
 }
 return sudoku;
}


console.log(createSudoku());







