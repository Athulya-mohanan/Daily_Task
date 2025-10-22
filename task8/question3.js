const border_container=document.getElementById("border_container")
let min=0
let max=255
function randomColor(){
    return Math.floor(Math.random()*(max-min)+min)
}
border_container.addEventListener("dblclick",()=>{
    border_container.style.border=`3px solid rgb(${randomColor()},${randomColor()},${randomColor()})`
})