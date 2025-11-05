/** Create a Promise which resolves in 3 seconds, after resolving log message "Login successful". Use async/await. */
function toSuccessfull(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Login successful")
        }, 3000);
    })
}
async function asyncFunction(){
        let result=await toSuccessfull()
        console.log(result)
}

asyncFunction()