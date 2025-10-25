const new_promise= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve()
    },2000)
})
function handleFullFill(){
    console.log("Data Loaded")
}
new_promise
.then(handleFullFill)