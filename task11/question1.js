function deepClone(obj){
   let copiedObject=JSON.parse(JSON.stringify(obj))
    obj.user.age=40
    console.log("Original :",obj)
    console.log("Copied :",copiedObject)
}
deepClone({user: { name: 'John', age: 25 },skill: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']})