/** Create a Promise that resolves with the number 5. Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20). */
let new_promise=new Promise((resolve)=>{
    resolve(5)
})
.then((result)=>result*2)
.then((result)=>result+10)
.then((result)=>console.log(result))
