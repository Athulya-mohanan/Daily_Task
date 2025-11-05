/**3. Write a function which deep clones a given object.

Test cases:
Input: {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}
Expected output:  {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']} */
function deepClone(obj){
    let deepclone=JSON.parse(JSON.stringify(obj))
    return deepclone
}
console.log(deepClone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}))

