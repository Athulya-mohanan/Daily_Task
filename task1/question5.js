let incrmbtn=document.getElementById("icrm")
let decrembtn=document.getElementById("decrm")
let resetbtn=document.getElementById("rest")
let displaycount=document.getElementById("displaycount")
let warningid=document.getElementById("warningid")
let count=0
displaycounter(count)
function countRange(count){
    if(count>=10||count<= -10){
        warningid.textContent="You reach the limit"
        count=0
    }
   
    displaycounter(count)

}
function displaycounter(count){
    displaycount.textContent=count
    if(count>0){
      displaycount.style.color="green"  
    }else if(count==0){
        displaycount.style.color="gray"
    }
    else{
        displaycount.style.color="red"
    }
}

incrmbtn.addEventListener('click',()=>{
    warningid.textContent=""
    if(count<10){
        count++
    }
    
      countRange(count)   
})
decrembtn.addEventListener('click',()=>{
     warningid.textContent=""
     if(count>-10){
         count--
     }
   
     countRange(count)  
})
resetbtn.addEventListener('click',()=>{
     warningid.textContent=""
    count=0
    countRange(count)
})