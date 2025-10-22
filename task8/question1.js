const container=document.getElementById("container")
let max=255
let min=0
function randomColor(){
    return Math.floor(Math.random()*(max-min)+min)
}
console.log( randomColor())
container.addEventListener("mouseenter",()=>{
    container.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`
})
container.addEventListener("mouseleave",()=>{
    container.style.backgroundColor="white"
})