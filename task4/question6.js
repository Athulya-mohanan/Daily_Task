function numbersToWords(num){
    if(typeof(num)!=="number" || num<0 || Math.round(num)!==num) return "Invalid input"
  
    if(num===0) return "Zero"
    let ones=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","Seventeen","Eighteen","Nineteen"]
    let tens=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
let words=""
if(num>=100){
    let hundreds=Math.floor(num/100)
    words+=ones[hundreds]+" hundred"
    num=num%100
    if(num>0){
        words+=" and "
    }
}
if(num>0){
    if(num<20){
        words+=ones[num]
    }
    else{
        let tenDigit=Math.floor(num/10)
        let oneDigit=num%10
        words+=tens[tenDigit]
        if(oneDigit>0) words+=" "+ ones[oneDigit]
    }
}
return words
   }
   
// console.log(numbersToWords(745))
   
let testCase=[
    {
        input:678,
        expected:"six hundred and seventy eight"
    },
    {
        input:-90,
        expected:"Invalid input"
    },
    {
        input:9.08,
        expected:"Invalid input"
    },
    {
        input:4/2,
        expected:'two'
    },
    {
        input:0,
        expected:"Zero"
    },
    {
        input:101,
        expected:""
    },
    {
        input:null,
        expected:"Invalid input"
    },
     {
        input:undefined,
        expected:"Invalid input"
    },
     {
        input:NaN,
        expected:"Invalid input"
    },
    {
        input:"",
        expected:"Invalid input"
    },
    {
        input:[],
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
    {
        input:1000,
        expected:"ten hundred"

    },
    {
        input:1*"hy",
        expected:"Invalid input"
    },
    {
        input:[{}],
        expected:"Invalid input"
    }
]
testCase.forEach((num,index)=>{
    let output=numbersToWords(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1, pass?"Pass":"Fail")
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})