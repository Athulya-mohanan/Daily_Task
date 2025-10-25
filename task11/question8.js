const toogle_list=document.querySelectorAll(".toogle_list")
window.addEventListener("keyup",(event)=>{
    if(event.key==='a' && event.shiftKey===true){
        toogle_list.forEach(element => {
        if(element.style.display==="none"){
            element.style.display="block"
        }else{
            element.style.display="none"
        }
});
    }
})
