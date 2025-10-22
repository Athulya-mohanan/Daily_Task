

function  isValidNumber(value){
   if(isFinite(value) && typeof(value)==="number") {
    return "valid"
   }
   else{
    return "not valid"
   }

}
console.log(isValidNumber("ewkm"))