let unorder=document.getElementById("unorder")
let container=document.getElementById("container")
let load=document.getElementById("load")
let count=1

function fetchData(){
    load.style.visibility="visible"
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`)
.then(response=>response.json())
.then(data=>{
    data.forEach(dat=>{
       let list=document.createElement("li")
       list.innerHTML=`
      <p> userId :${dat.userId}</p>
       <p>id :${dat.id}</p>
        <p>title :${dat.title}</p>
       <p> body :${dat.body}</p>`
        unorder.appendChild(list)
    })
 
})
}

fetchData()
  document.addEventListener("scrollend",()=>{
        count=count+1   
        fetchData()
        
    })