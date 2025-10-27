
// 5. Write a function to check object equality. Which receives two objects as arguments, and it should return "Equal" if both contain same keys, values, "Not Equal" if not.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: "Not Equal"


 function checkObjectEquality(obj1,obj2){
  
    // return JSON.stringify(obj1)===JSON.stringify(obj2)
    let newobj1=Object.entries(obj1).sort()
    let newobj2=Object.entries(obj2).sort()

  
       
        for(let i=0;i<newobj1.length;i++){
            if(newobj1[i].toString()!==newobj2[i].toString()){
                return "not equal"
            }
            else{
                return "equal"
            }
        }       
        
    
   

}
console.log(checkObjectEquality({ a:3,b:4}, { a: 3, b: 4 }))