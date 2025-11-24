let modal=document.querySelector(".modal_window")
let crossButton=document.querySelector(".cross")


window.addEventListener("click",(event)=>{
  if(event.target.className==="container"||event.target.className==="cross"){
    modal.style.display="none"
  }
  else modal.style.display="block"
})
window.addEventListener("keyup",(event)=>{
    console.log(event.key)
    if(event.key==="Escape"){
        modal.style.display="none"
    }
})