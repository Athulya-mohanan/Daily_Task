let users={ user: { name: 'John', age: 25 } } 
let users1=JSON.parse(JSON.stringify(users))
users.user.name="Elva"
users1.user.age=45
console.log(users1)
console.log(users)