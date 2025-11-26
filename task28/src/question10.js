const container=document.getElementById("container")
const arrow=document.querySelector(".arrow")
window.addEventListener("scroll",()=>{
    const scrolltop=window.scrollY
    const scrollHeights=document.body.scrollHeight-window.innerHeight
    const scrollPercentage=(scrolltop/scrollHeights)*100
   if(scrollPercentage>30){
    arrow.style.visibility="visible"
   }else{
    arrow.style.visibility="hidden"
   }
})
arrow.addEventListener("click",()=>{
    document.documentElement.scrollTop=0
})