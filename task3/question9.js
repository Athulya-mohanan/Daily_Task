function removeDuplications(str){
   let arr=[]
   for(i of str){
    arr.push(i)
   }
   let duplicatedremove= [... new Set(arr)]
   return duplicatedremove.toString()

}
console.log(removeDuplications("apple"))