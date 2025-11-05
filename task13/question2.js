// need to write a function compose(function) that takes:
//An array of functions-->[f1,f2,f3,....,fn]
//ANd returns a new function that represents their composition:
// fn(x)=f1(f2(f3(...fn(x)))) if the array is empty,it should return the identity function-->x=>x

//*A function composition means combining multiple functions so that the o/p of one function becomes the input of the next.
// for example conside we have 3 functions add,double,square--->add(double(square(x)))  ---> this means take a input x and pass to the square and the result of that will be pass to the function double, then that result will pass to ass1
function compose(functions){
    return function(x){
        if(functions.length===0) return x;
        for(let i=functions.length-1;i>=0;i--){
            x=functions[i](x)
        }return x
    }
}


function add(x){return x+1}
function double(x){return x*2}
function square(x){return x*x}

const functions=[add,double,square]

const composition=compose(functions)

console.log(composition(2))