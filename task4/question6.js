function numbersToWords(num){
    if(num===0) return "Zero"
    let ones=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","Seventeen","Eighteen","Nineteen"]
    let tens=["","","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"]
let words=""
if(num>=100){
    let hundreds=Math.floor(num/100)
    words+=ones[hundreds]+"hundred"
    num=num%100
    console.log(num)
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
return words.charAt(0).toUpperCase()+words.slice(1)
   }
   
console.log(numbersToWords(745))   