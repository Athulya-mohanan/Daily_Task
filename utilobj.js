export function objectComparison(a,b){
    let result="Passed"
    if(typeof a==="object" && typeof b==="object" ) {
        const keysA=Object.keys(a)
        const keysB=Object.keys(b)
        if(keysA.length!==keysB.length) result="Fail"
        for(let keys of keysA){
            if(!keysB.includes(keys)) result="Fail"
            if(a[keys]!==b[keys]) result="Fail"
        }
    }
    else {result = a===b ? 'Passed': 'Failed'}
    return result
}
// let obj1={age:"Athulya",name:35}
// let obj2={name:"Athulya",age:34}
// console.log(objectComparison(obj1,obj2))