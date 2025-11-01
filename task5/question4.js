function findRoman(num){
    
    if(typeof(num)!=="number" || Math.round(num)!==num ) return "Invalid input"
    if(num<1||num>2000){
        return "Enter a number between 1 and 2000"
    }
    let RomanLetters=[
        {value:1000,Symbol:"M"},
        {value:900,Symbol:"CM"},
        {value:500,Symbol:"D"},
        {value:400,Symbol:"CD"},
        {value:100,Symbol:"C"},
        {value:90,Symbol:"XC"},
        {value:50,Symbol:"L"},
        {value:40,Symbol:"XL"},
        {value:10,Symbol:"X"},
        {value:9,Symbol:"IX"},
        {value:5,Symbol:"V"},
        {value:4,Symbol:"IV"},
        {value:1,Symbol:"I"}
    ]
    let result=""
    for(i=0;i<RomanLetters.length;i++){
        while(num>=RomanLetters[i].value){
            result+=RomanLetters[i].Symbol
            num-=RomanLetters[i].value
        }
    }
    return result
}
testCase=[
    {
        input:12,
        expected:"XII"
    },
    {
        input:12.8,
        expected:"Invalid input"
    },
    {
        input:-12,
        expected:"Enter a number between 1 and 2000"
    },
    {
        input:0,
        expected:"Enter a number between 1 and 2000"
    },
    {
        input:3/5,
        expected:"Invalid input"
    },
    {
        input:2001,
        expected:"Enter a number between 1 and 2000"
    },
    {
        input:2000,
        expected:"MM"
    },
    {
        input:[1,2,3],
        expected:"Invalid input"
    },
    {
        input:{},
        expected:"Invalid input"
    },
   {
        input:NaN,
        expected:"Invalid input"
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
        input:"12",
        expected:"Invalid input"
    }, 
    {
        input:Infinity,
        expected:"Enter a number between 1 and 2000"    
    },
    {
        input:true,
        expected:"Invalid input"
    }

]
testCase.forEach((num,index)=>{
    let output=findRoman(num.input)
    let pass=output.toString()===num.expected
    console.log(`Test: ${index+1}`,pass?"Passed":"Failed")
    console.log(`Input`,num.input)
    console.log(`Expected: `,num.expected)
    console.log(`Got:`,output)
    console.log("---------------------------------")
})