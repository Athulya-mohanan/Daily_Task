/*
1. Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message. */
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