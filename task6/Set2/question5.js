
function nanDetected(){
    return NaN===NaN
    
}
let bool=nanDetected()
if(bool===false){
    console.log('NaN detected')
}
nanDetected()