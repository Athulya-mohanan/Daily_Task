/**7. Write a Function that Converts RGB to Hex Color Code.

Test cases:
Input: [255, 165, 0]
Output: "#FFA500" */
function getHexaColor(color){
    if(!Array.isArray(color) || color.length===0 || color.length!==3) return "Invalid input"
  for(let clr of color){
    if(typeof(clr)!=="number" || Math.round(clr)!==clr) return "Invalid input"
  }
const [r,g,b]=color;
const red=r.toString(16).padStart(2,'0')
const green=g.toString(16).padStart(2,'0')
const blue=b.toString(16).padStart(2,'0')
return "#"+(red+green+blue).toUpperCase()
}
// console.log(getHexaColor([245, 165, 0]))
let testCase=[
    {
        input:[245,165,0],
        expected:"#F5A500"
    },
    {
        input:[245.8,165,0],
        expected:"Invalid input"
    },
    {
        input:{num:1},
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:123,
        expected:"Invalid input"
    },
    {
        input:[1,2,3],
        expected:"#010203"
    },
    {
        input:[null,null],
        expected:"Invalid input"
    },
    {
        input:[1,2],
        expected:"Invalid input"
    },
    {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:undefined,
        expected:"Invalid input"
    },
    {
        input:null,
        expected:"Invalid input"
    },
    {
        input:"Hello",
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:['','',''],
        expected:"Invalid input"
    },
    {
        input:[[],[],[]],
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=getHexaColor(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1, pass?"Pass":"Fail")
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})