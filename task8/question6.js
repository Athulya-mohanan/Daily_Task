let window_width=document.getElementById("window_width")
let window_height=document.getElementById("window_height")

window.addEventListener("resize",()=>{
  window_width.textContent=`Width: ${window.innerWidth}`
  window_height.textContent=`Height: ${window.innerHeight}`
})