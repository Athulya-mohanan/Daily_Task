let new_promise=new Promise((resolve)=>{
    resolve(5)
})
.then((result)=>result*2)
.then((result)=>result+10)
.then((result)=>console.log(result))
