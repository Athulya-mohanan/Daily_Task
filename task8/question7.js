const container=document.getElementById("container")
const progressbar=document.getElementById("progress_fill")
window.addEventListener("scroll",()=>{
    // const scrollTop=container.scrollTop
    // const scrollHeight=container.scrollHeight-container.clientHeight
    const scrollTop=window.scrollY;
    const scrollHeight=document.body.scrollHeight-window.innerHeight
    const scrollPercentage=(scrollTop/scrollHeight)*100
    progressbar.style.width=scrollPercentage+"%";
})