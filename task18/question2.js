/**Write a function Pipe(...fns) that composes multiple functions left-to-right.
Example:
const add5 = x => x + 5;
const multiply3 = x => x * 3;
const piped = Pipe(add5, multiply3);
piped(5); // → multiply3(add5(5)) → 30 */

function Pipe(functions){
    return function(x){
        if(functions.length===0) return x
        for(let i=0;i<functions.length;i++){   //left to right
            x=functions[i](x)
        }return x
    }
    
}
function add5(x){return x+5}
function multiply3(x){return x*3}
const functions=[add5,multiply3]
const piped=Pipe(functions)
console.log(piped(5))