//  Create a person Object, which contains below said properties:
// 	- A firstName property (e.g., "John")
// 	- A lastName property (e.g., "Doe").
// 	- A birthYear property (e.g., 1990).
// 	- A method called getFullName() that returns the person's full name (e.g., "John Doe")
// 	- A method called getAge() that calculates and returns the person's current age.


let person={
    firstName:"John",
    lastName:"Doe",
    birthyear:1998,
    fullName(){
        return this.firstName+ " "+ this.lastName
    },
    getAge(){
        let currentYear=new Date().getFullYear()
       return currentYear-this.birthyear
    }
}

console.log(person.getAge(),person.fullName())




