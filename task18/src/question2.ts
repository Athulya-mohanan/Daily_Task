function Pipe(functions:((x:number)=>number)[]){
    return function(x:number){
        if(functions.length===0) return x
        // for(let i=0;i<functions.length;i++){
        //     x=functions[i](x)
        for(let fn of functions){
            x=fn(x)
        }
        return x
    }
}    

function add5(x:number):number{return x+5}
function multiply3(x:number):number{return x*3}
const functions=[add5,multiply3]
const piped=Pipe(functions)
console.log(piped(5))
