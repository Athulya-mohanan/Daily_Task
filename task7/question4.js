// A
// B B
// C C C
// D D D D
// E E E E E
// function patternPrinting(n){
//     let letters=['A','B','C','D','E','F','G']
//     for(let i=0;i<n;i++){
//         console.log(letters[i].repeat(i+1).split("").join(" "))

//     }

// }
// patternPrinting(7)

function patternPrinting(n) {
  let letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(i);
  }
  for (let i = 0; i < n; i++) {
    console.log(
      String.fromCharCode(letters[i])
        .repeat(i + 1)
        .split("")
        .join(" ")
    );
  }
}
patternPrinting(9);
