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