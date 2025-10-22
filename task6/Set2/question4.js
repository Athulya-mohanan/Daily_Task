function valueofFunction(value){
    console.log(value==undefined)
    if(value!=NaN||value==undefined||value!=Infinity){
        return true
    }
    else{
        return false
    }
}
console.log(valueofFunction(undefined))

