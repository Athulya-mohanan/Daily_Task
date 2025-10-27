//  Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed. Maximum input length can be 50.
// Test cases:
// Input: [10, 20, 15, 30, 22, 40]
// Output: [10, 15, 22, 40] or [10, 20, 30, 40] or [10, 15, 30, 40]

function highestIncresing(arr){
   
    // let resultarr=[]
    // let randomarr=[]
    // let sorted=arr.sort().splice(0,2)
    //     let randomIndex=Math.floor(Math.random()*sorted.length)
    //     let randomNumb=sorted[randomIndex]
    //     console.log(randomNumb)
    //     console.log(arr)
    //         randomarr.push(randomNumberArray(arr))
        
    //     for(let i of randomarr){
    //         if(i>randomNumb){
    //             resultarr.push(i)
    //         }
    //     }
       
    //   console.log(resultarr)
    

      
   
}
highestIncresing([10, 20, 15, 30, 22, 40])

function randomNumberArray(arr){
    // console.log(arr)
    let randomIndexArr=Math.floor(Math.random()*arr.length)
      let randomNumbArr=arr[randomIndexArr]
      return randomNumbArr
}