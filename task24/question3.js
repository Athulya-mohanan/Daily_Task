let inputBar=document.getElementById("input_bar")
let counter=document.getElementById("counter")
let count=0
inputBar.addEventListener("input",()=>{

    count=inputBar.value.length
    counter.textContent=`Count :${count}`
    if(count>10){
        counter.style.color="red"
    }else counter.style.color="black"
})