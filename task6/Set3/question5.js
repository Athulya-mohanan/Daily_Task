let users={name:"ELva",age:45}
function updateUser(user){
    let user1=JSON.parse(JSON.stringify(user))
    user1.age=26
    console.log(user)

    let user2=user
    user2.age=36
    console.log(user)
}
updateUser(users)