
// 5. Write a function to check object equality. Which receives two objects as arguments, and it should return "Equal" if both contain same keys, values, "Not Equal" if not.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: "Not Equal"


 function checkObjectEquality(obj1,obj2){
    let result;
    // return JSON.stringify(obj1)===JSON.stringify(obj2)
    let newobj1=Object.entries(obj1).sort()
    let newobj2=Object.entries(obj2).sort()

    for(let i=0;i<newobj1.length;i++){
       
        for(let j=0;j<newobj2.length;j++){
            if(newobj1[i].toString()!=newobj2[j].toString()){
                result=false
            }
            else{
                result= true
            }
        }       
        
    }
   
   return result
}
console.log(checkObjectEquality({ a:3,b:4}, { a: 3, b: 4 }))