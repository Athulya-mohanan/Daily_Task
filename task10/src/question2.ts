function greet(name:string,greets="Hello"):string{
    return `${greets}, ${name}`
}
console.log(greet("Alice"))
console.log(greet("Bob","Hi"))