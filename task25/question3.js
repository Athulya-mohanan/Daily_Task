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
        const parentUl=arrow.parentElement;
        const subItems=parentUl.querySelectorAll("li")
        subItems.forEach(li=>{
            li.style.display=li.style.display==="block"?"none":"block"
        })
        
  })
})
