let hamb=document.getElementById("hamb")
let unorder=document.getElementById("unorder")
let cross=document.getElementById("cross")
let buttons=document.getElementById("buttons")
let downarow=document.querySelectorAll(".downarow")
// let list=document.querySelectorAll(".list")
// console.log(list.le)
buttons.addEventListener("click",()=>{
   if(hamb.style.display==="none") {
    cross.style.display="none"
    hamb.style.display="block"
    unorder.style.display="none"
   }
    
  else{
    cross.style.display="block"
    hamb.style.display="none"
    unorder.style.display="block"
  }
})
downarow.forEach(arrow=>{
    arrow.addEventListener("click",()=>{
        let list=document.querySelectorAll(".list")
        list.forEach(lst=>{
            if(lst.style.display==="block"){
                lst.style.display="none"
            }else{
                lst.style.display="block"
            }
        }) 
    })
})
