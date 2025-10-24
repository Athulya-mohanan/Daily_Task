let unorder=document.getElementById("unorder")
fetch('https://randomuser.me/api/?results=5')
.then(response=>response.json())
.then(data=>{
    console.log(data.results)
    data.results.forEach(element => {
        let list=document.createElement('li')
        list.innerHTML=`
        <img src=${element.picture.medium}></img>
        <p> Name: ${element.name.title} ${element.name.first} ${element.name.last}</p>
        <span>email: ${element.email}</span>`
        unorder.appendChild(list)
    });
    
})