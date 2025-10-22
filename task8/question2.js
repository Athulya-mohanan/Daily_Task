const text_area=document.getElementById("text_area")
const toogle_btn=document.getElementById("toogle_btn")
const display_text=document.getElementById("display_text")

// toogle_btn.addEventListener("click",toogle)
//  display_text.style.display="none"
//     toogle_btn.textContent="Click to show text"
// function toogle(){
//      if(display_text.style.display==="none"){
//     display_text.style.display="block"
//     display_text.textContent=text_area.value
//     toogle_btn.textContent="Click to hide  text"
//    }else if(display_text.style.display==="block"){
//     display_text.style.display="none"
//     toogle_btn.textContent="Click to show text"
//    } 
// }
toogle_btn.addEventListener("click",toogle)
    display_text.style.display="none"
    toogle_btn.textContent="click to show text"
    function toogle(){
        if(display_text.style.display==="none"){
            display_text.style.display="block"
            let li=document.createElement("li")
            li.textContent=text_area.value
            display_text.appendChild(li)
            toogle_btn.textContent="Click to hide  text"
            text_area.value=""
        }
        else if(display_text.style.display==="block"){
            display_text.style.display="none"
        toogle_btn.textContent="Click to show text"
        
   } 
}
    
