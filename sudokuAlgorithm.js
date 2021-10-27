var sudoku = [];

function createSudoku() {
for (var x=1; x < 10; x++) {
  for (var y=1; y < 10; y++) {
    //var sudokuTemp = [null];
    coordinateX = parseInt(x);
    //console.log(coordinateX);
    coordinateY = parseInt(y);
    //console.log(coordinateY);
    //sudoku += "x" + coordinateX;
    //sudoku += "y" + coordinateY;
    //sudoku += Math.floor(Math.random()*10); // generuoja random visiem elementams
    sudoku.push(y);
     if (sudoku[x-1] == sudoku[x] in sudoku) {
      sudoku.push(y);
      // Math.floor(Math.random()*10)
      console.log(sudoku);
    }
  }
  //Array.from(sudoku);
  //console.log(Array.from(sudoku)); // spausdina kaip masyva bet yra stringas
  //console.log(sudoku);
 }
 return sudoku;
}



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let sudokuArr = createSudoku();
//Array.from(sudokuArr);
//[...sudokuArr];
//Object.assign([], sudokuArr);
//shuffle(sudokuArr);

//console.log(sudokuArr);
console.log(createSudoku());

//console.log(Array.prototype.slice(createSudoku()[0][0]));


// gali buti kad vykdant konkatinacijai sudetus elementus nesupranta kaip atskiru 
// elementu, uz funkcijos createSudoku ribu neiseina manipuliuoti elementais nors 
// ir prisiskitiant nauja kintamaji kaip masyva..







