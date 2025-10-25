let new_promise =new Promise((resolve,reject)=>{
    let networkError=true
    setTimeout(()=>{
        networkError?reject("Network error"):resolve("Successfull")
    },1000)
    
})

new_promise
.then((success)=>console.log(success))
.catch((rejected)=>console.log(rejected))