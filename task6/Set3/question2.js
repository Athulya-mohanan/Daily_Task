let obj={name:"Elva",age:27,city:{address:"LF-1",pin:7890}}
let spreadClone={...obj}
let assignClone=Object.assign(obj)
obj.city.address="LF-8"
console.log(assignClone)
console.log(spreadClone)