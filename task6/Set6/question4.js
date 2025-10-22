function randomNumber(){
    let min=50;
    let max=100;
    let randomNum=Math.round(Math.random()*(max-min)+min)
    return randomNum
}
console.log(randomNumber())