var sudoku = [];
var sudoku2 = [];
var random;

function createSudoku() {
for (var i=1; i < 10; i++) {
  for (var x = 1; x < 10; x++) {
    random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    console.log("random", random);
    console.log("koordinate " + x);
    sudoku.push([x]);
  if ( sudoku.includes(random) ) {
    console.log("Yra toks elementas");
    var loopCount = 0;
    while ( sudoku.includes(random) ) {
        console.log(random, "YRA");
        random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
        loopCount++;
        if (loopCount >= 9) break;
    }
    console.log("RANDOM REIKSME PASIBAIGUS FOR ", random);
    sudoku.push([random]);
} else {
    console.log("nera tokio elemento irasom random");
    sudoku.push([random]);
}
console.log("sudoku: ", sudoku);

  }
 }
 return sudoku;
}


console.log(createSudoku());







