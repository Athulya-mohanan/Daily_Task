const container=document.getElementById("container")
const progressBar=document.getElementById("progress_range")
window.addEventListener("scroll",()=>{
    const scrolltop=window.scrollY; // gives how many pixel the user has scrolled from the top of the page
    const scrollHeights=document.body.scrollHeight-window.innerHeight // total height of the whole webpage- visible part(screen height)
    const scrollPercentage=(scrolltop/scrollHeights)*100;
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