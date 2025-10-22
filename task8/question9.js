const input_text=document.getElementById("input_text")
const add_btn=document.getElementById("add_btn")
const unorder_list=document.getElementById("unorder_list")
add_btn.addEventListener("click",()=>{
   let li= document.createElement('li')
   li.innerHTML=`
   <span>${input_text.value}</span>`
   unorder_list.appendChild(li)
   input_text.value=""
})