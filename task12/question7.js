// . Create a UI with some list items, which has equal width for all the items. 
// If the text isn't able to fit in the given width, we can truncate it and add ...(triple dots) at the end. 
// When hovering over the list item, the whole text needs to be shown for text which is truncated using triple dots as a tooltip. 
// Like shown in the given image. The tooltip should move along with the cursor.



const listItems=document.querySelectorAll(".list_item")
const billamount=document.getElementById("list")
const container=document.getElementById("container")
listItems.forEach(lists=>{
    lists.addEventListener("mouseenter",()=>{
        let div=document.createElement("div")
        div.style.backgroundColor="black"
        div.style.color="white"
        div.textContent=lists.textContent
        div.style.padding="10px"
        div.style.listStyle="none"
        div.style.fontSize="20px"
        lists.appendChild(div)

        lists.addEventListener("mouseleave",()=>{
            div.style.display="none"
            div.textContent=""
        })
    }) 
})




