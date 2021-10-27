
var sudoku = [];

for (var x=1; x < 10; x++) {
   // sudoku.push(x);
   // console.log(sudoku);
   //var previousEl = sudoku[x-1];
   //var currentEl = sudoku[x];
   random1 = Math.floor(Math.random()*10);
   console.log("random1", random1);
    if (random1 in sudoku) {
        console.log("Yra toks elementas")
        random2 = Math.floor(Math.random()*10);
        console.log("random2", random2);
        if (random2 in sudoku){
            random3 = Math.floor(Math.random()*10);
            console.log("random3", random3);
            console.log("nera tokio elemento irasom random3")
            sudoku.push(random3);
        }else{
        console.log("nera tokio elemento irasom random2")    
        sudoku.push(random2);
        }
    }else{
        console.log("nera tokio elemento irasom random1")
        sudoku.push(random1);

    }
 // Math.floor(Math.random()*10)
    console.log("elem: ", sudoku);
 }



 /*
 Jei toks elementas yra sarase, daryti random kol sugeneruos nesanti sarase elementa
 */
