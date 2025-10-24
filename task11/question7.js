const container=document.getElementById("container")
const unorderd=document.getElementById("unorderd")
const input=document.getElementById("input")

 async function fetchData(){
    let postResult;
    let userResult;
    try{
        const resPost=await fetch("https://jsonplaceholder.typicode.com/posts")
        const resUser=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!resPost.ok || !resUser.ok){
            throw new Error(`Response status ${res.status}`)
        }
          postResult=(await resPost.json())
          userResult=(await resUser.json())
        
    }catch (error){
        console.error(error)
    }
    postResult.forEach(posts => {
        userResult.forEach(users=>{
            if(posts.userId===users.id){
                let ul=document.createElement("ul")
                let count
                ul.innerHTML=`
                <style>
                li{
                    list-style: none;
                    padding:8px
                    }
                </style>
                <li><b>UserId:</b>${posts.userId}</li>
                <li><b>Id:</b>${posts.id}</li>
                <li><b>Title:</b>${posts.title}</li>
                <li><b>Body:</b>${posts.body}</li>
                <li><b>Name:</b>${users.name}</li>
                <li><b>Email:</b>${users.email}<li>
                <hr>`
                container.append(ul)
            }
        })
    });
   
}


fetchData()


