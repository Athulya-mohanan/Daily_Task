function findRoman(num){
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
console.log(findRoman(65))