let sudoku = [];
var random;

for (let x = 1; x < 10; x++) {
    
    random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    console.log("random", random);

    if ( sudoku.includes(random) ) {
        console.log("Yra toks elementas");

        while ( sudoku.includes(random) ) {
            console.log(random, "YRA");
            random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
        }
        console.log("RANDOM REIKSME PASIBAIGUS FOR ", random);
        sudoku.push(parseInt(random));
    } else {
        console.log("nera tokio elemento irasom random");
        sudoku.push(random);
    }
    console.log("sudoku: ", sudoku);
 }

