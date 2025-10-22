function perfectSquare(num){
    let result
    for(let i=0;i<10;i++){
        if(i*i===num){
            result= true
            break;
        }
        else{
            result =false
        }
    }
    return result
}
console.log(perfectSquare(25))