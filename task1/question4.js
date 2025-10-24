let inputvalue=document.getElementById("inputvalue")
let btn=document.getElementById("btn")
let unorderd=document.getElementById("unorderd")

btn.addEventListener('click',()=>{
    if(inputvalue.value.trim()=="") return
    let list= document.createElement('li')
    list.className="lists"
    
    list.innerHTML=`
    <span>${inputvalue.value}</span>`
    list.addEventListener("click",()=>list.style.textDecoration="line-through")
    unorderd.appendChild(list)
    inputvalue.value="" 
})