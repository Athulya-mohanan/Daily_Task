function numberToText(num){
    if(num===0) return "Zero"
    let ones=["","one","Two","Three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    let tens=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
    let words=""
    if(num>=100){
        let hundereds=Math.floor(num/100)
        words+=ones[hundereds] +"hundred"
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
console.log(numberToText(890))