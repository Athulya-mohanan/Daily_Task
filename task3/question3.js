function deepClone(obj){
    let deepclone=JSON.parse(JSON.stringify(obj))
    return deepclone
}
console.log(deepClone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}))