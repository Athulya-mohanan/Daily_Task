/**3. Create a Promise that resolves after 2 seconds with "Success". Use .finally() to log "Promise completed" after it's done (whether resolved or rejected). */
let new_promise=new Promise((resolve,reject)=>{
    let result=true
    setTimeout(()=>{
        result?resolve():reject()
    },2000)
})
new_promise
.then(()=>console.log("Success"),()=>console.log("Failure"))
.finally(()=>console.log("Promise completed"))