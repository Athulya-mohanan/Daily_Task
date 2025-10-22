const  unorder_list=document.getElementById("unorder_list")
const instrn=document.getElementById("instrn")
const instrn2=document.getElementById("instrn2")
unorder_list.style.display="none"
instrn2.style.display="none"
window.addEventListener("keyup",(event)=>{
    console.log(event.key)
    if(event.key==="A" && event.shiftKey===true){
        unorder_list.style.display="block"
        instrn.style.display="none"
        instrn2.style.display="block"
    }
    else if(event.key==="Escape"){
        unorder_list.style.display="none"
        instrn.style.display="block"
        instrn2.style.display="none"
    }
})
