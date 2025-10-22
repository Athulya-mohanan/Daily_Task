let input_value=document.getElementById("input_value")
let print_name=document.getElementById("print_name")
let typeTime;
function nameFunction(){
 clearTimeout(typeTime)
 typeTime=setTimeout(printName,1000)
}
function printName(){
     print_name.textContent=`Hello:${input_value.value}`
}
