function function1(){
    return new Promise((success)=>{
         success("success from function-1") 
    })  
}
function function2(){
    return new Promise((success)=>{
        success("success from function-2")
    })
}
function function3(){
    return new Promise((success)=>{
        success("success from function-3")
    })  
}


Promise.all([console.log(function1()),console.log(function2()),console.log(function3())])
