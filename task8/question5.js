const border_container=document.getElementById("border_container")
let count=0
let min=0
let max=255
function randomColor(){
    return Math.floor(Math.random()*(max-min)+min)
}
border_container.addEventListener("dblclick",()=>{
    if(count===0){
        border_container.style.border=`3px solid rgb(${randomColor()},${randomColor()},${randomColor()})`
        count++
    }else return
    
})