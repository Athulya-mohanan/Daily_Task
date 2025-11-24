let pages=document.querySelectorAll(".page")
let title=document.querySelectorAll(".name")
for(let i=0;i<pages.length;i++){
    title[i].addEventListener("click",()=>{
        title.forEach(tit=>{
            tit.classList.remove("active")
        })
        pages.forEach(page=>{
            page.classList.remove("active_text")
        })
        title[i].classList.add("active")
     pages[i].classList.add("active_text")
    })
}
