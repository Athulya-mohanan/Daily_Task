/**4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

Test cases:
Input: [1, 2, 3], [4, 5, 6], 2
Expected output: [1, 2, 4, 5, 6, 3] */
import { utilFunction } from "../util.js";

function addElementAtPosition(a1, a2, pos) {
    if(pos<0 || Math.round(pos)!==pos) return "Invalid position"
    if(!Array.isArray(a1)||!Array.isArray(a2)) return "Invalid input"
   let arr1=[...a1]
    let arr2=[...a2]
    if(pos==arr1.length-1){
        let last = arr1[pos];
            arr1[pos] = arr2
            arr1.push(last);
            return arr1.flat();
    }else{
        let spliced=arr1.splice(pos)
            arr1[pos] = arr2
            arr1.push(spliced);
            return arr1.flat();
    }
}
// console.log(addElementAtPosition([1, 2, 3], [4, 5, 6], 1))
// console.log(addElementAtPosition( [1, 2, 3], [4, 5, 6], 2))

let testCase=[
    {
        inp1:[1,2,3],
        inp2:[4,5,6],
        pos:1,
        expected:[ 1, 4, 5, 6, 2, 3 ]
    },
   {
        inp1:["hey","there",3],
        inp2:[4,"hello",6],
        pos:1,
        expected:[ 1, 4, 5, 6, 2, 3 ]
    },
    {
        inp1:[],
        inp2:[],
        pos:2,
        expected:[]
    },
    {
        inp1:[],
        inp2:["hello"],
        pos:3,
        expected:["hello"]
    },
    {
        inp1:[1,2,3,4],
        inp2:["there"],
        pos:6,
        expected:[ 1, 2, 3, 4, 'there' ]
    },
    {
       inp1:"hello",
        inp2:"hey",
        pos:4,
        expected:"Invalid input"
    },
    {
        inp1:[1,2,3,4],
        inp2:"there",
        pos:3,
        expected:"Invalid input"
    },
    {
        inp1:[-1,-4,0,9],
        inp2:["hello"],
        pos:1,
        expected:[ -1, 'hello', -4, 0, 9 ]
    },
    {
        inp1:[1,2,3,4],
        inp2:["there"],
        pos:-3,
        expected:"Invalid position"
    },
    {
        inp1:[1,2,3,4],
        inp2:["there"],
        pos:3.6,
        expected:"Invalid position"  
    },
    {
        inp1:[1/4,2,3,4],
        inp2:["there"],
        pos:6,
        expected:[ 0.25, 2, 3, 4, 'there' ]
    },
    {
        inp1:null,
        inp2:["hello"],
        pos:1,
        expected:"Invalid input"
    },
     {
        inp1:undefined,
        inp2:["hello"],
        pos:1,
        expected:"Invalid input"
    },
     {
        inp1:NaN,
        inp2:["hello"],
        pos:1,
        expected:"Invalid input"
    },
    {
        inp1:["hello","hey"],
        inp2:[],
        pos:0,
        expected:[ 'hello', 'hey' ]

    }
]
testCase.forEach((num,index)=>{
    let output=addElementAtPosition(num.inp1,num.inp2,num.pos)
    let pass=utilFunction(output,num.expected)
     console.log(`Test: ${index+1}`,pass)
    console.log(`Input1`,num.inp1)
    console.log("Input 2",num.inp2)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})