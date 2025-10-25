const image_input=document.getElementById("image_input")
const delete_btn=document.getElementById("delete_btn")
const message=document.getElementById("message")
const display_image=document.getElementById("display_image")
let images=[]

function updateMessage(){
    if(images.length===0){
        message.style.display="block";
        return;
    }else{
        message.style.display="none"
    }
}

function showImages(){
    display_image.innerHTML="";
    updateMessage();
  
    images.forEach((src,index)=>{
        const box =document.createElement("div")
        box.style.position="relative"
        box.style.width="150px"
        box.style.height="150px"
        box.style.border="2px solid #ccc";
        box.style.borderRadius="6px"
        box.style.overflow="hidden"

        const img=document.createElement("img")
        img.src=src;
        img.style.width="100%"
        img.style.height="100%"
        img.style.objectFit="cover"

        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.style.position="absolute"
        checkbox.style.top="5px"
        checkbox.style.left="5px"

        const btn=document.createElement("button")
        btn.textContent="X"
        btn.style.position="absolute"
        btn.style.top="5px"
        btn.style.right="5px"
        btn.style.backgroundColor="red"
        btn.style.color="white"
        btn.style.borderRadius="4px"
        btn.style.cursor="pointer"
        btn.style.padding="2px 6px"

         // single delete
        btn.onclick=function(){
            images.splice(index,1)
            showImages()
        }
        box.appendChild(img)
        box.appendChild(checkbox)
        box.appendChild(btn)
        display_image.appendChild(box)
    })
}
image_input.addEventListener("change",function(){
    const files=Array.from(this.files)
    files.forEach((file)=>{
        const render=new FileReader()
        render.onload=function(){
            images.push(render.result)
            showImages()
        }
        render.readAsDataURL(file)
    })
    image_input.value=""
})

// delete selecetd images
delete_btn.addEventListener("click",function(){
    const boxes=display_image.querySelectorAll("div")
    const remaining=[];
    boxes.forEach((box,index)=>{
        const checkbox=box.querySelector("input[type='checkbox']")
        if(!checkbox.checked){
            remaining.push(images[index])
        }
    })
    images=remaining
    showImages()
})
  
showImages()
