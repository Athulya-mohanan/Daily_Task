const container=document.getElementById("container")
const progressBar=document.getElementById("progress_range")
window.addEventListener("scroll",()=>{
    const scrolltop=window.scrollY;
    const scrollHeight=document.body.scrollHeight-window.innerHeight
    const scrollPercentage=(scrolltop/scrollHeight)*100;
    progressBar.style.width=scrollPercentage+"%"
    progressBar.style.fontSize="22px"
    progressBar.style.color="white"
    progressBar.style.fontWeight="600"
    if(scrollPercentage>100){
        progressBar.textContent="100% Completed"
    }
    else{
        progressBar.textContent="Loading "+Math.floor(scrollPercentage)+"%"
    }
})