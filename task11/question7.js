function numberToText(num){
        if(typeof(num)!=="number" || num<0 || Math.round(num)!==num) return "Invalid input"
    if(num===0) return "Zero"
    let ones=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    let tens=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
    let words=""
    if(num>=100){
        let hundereds=Math.floor(num/100)
        words+=ones[hundereds] +" hundred"
        num=num%100
        if(num>0){
            words+= " and "
        }
    }
    if(num>0){
        if(num<20){
            words+=ones[num]
        }
        else{
            let tenDigit=Math.floor(num/10)
            let onesDigit=num%10
            words+=tens[tenDigit]
            if(onesDigit>0) words+=" " +ones[onesDigit]
        }
    }
return words
}
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
        expected:"one hundred and one"
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
    let output=numberToText(num.input)
    let pass=output.toString()===num.expected.toString()
    console.log("Test :",index+1, pass?"Pass":"Fail")
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})
// console.log(numberToText(890))