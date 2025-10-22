const unlike=document.getElementById("unlike")
const like=document.getElementById("like")
const like_button=document.getElementById("like_button")
unlike.style.display="block"
like_button.addEventListener("click",()=>{
    if(like.style.display==="none"){
        like.style.display="block"
        unlike.style.display="none"
    }else{
        like.style.display="none"
        unlike.style.display="block"
    }
})