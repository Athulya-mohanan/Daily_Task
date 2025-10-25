function largestPrefix(arr){
    let prevalue=arr[0]
    for(let i =0;i<arr.length;i++){
        while(!arr[i].startsWith(prevalue)){
            prevalue=prevalue.slice(0,-1)
        }
    }
    return(`"${prevalue}"`)
}
console.log(largestPrefix(["flower", "flow", "flight"]))
console.log(largestPrefix(["dog", "racecar", "car"]))