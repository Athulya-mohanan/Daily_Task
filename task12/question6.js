//  Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed. Maximum input length can be 50.
// Test cases:
// Input: [10, 20, 15, 30, 22, 40]
// Output: [10, 15, 22, 40] or [10, 20, 30, 40] or [10, 15, 30, 40]


// Are strictly increasing, and
// Appear in the same order as in the input.
// We want to find the longest increasing subsequence —
// that means: numbers that keep increasing, without reordering.

function longestIncreasinSequence(arr){
    //1) start by sorting each number as a single sequence
    let sequence=[[arr[0]]]

    //2) build sequences step by step
    for(let i=1;i<arr.length;i++){
        let num=arr[i]
        let newSequences=[];

        for(let seq of sequence){
            let lastNum=seq[seq.length-1]

            // case:1  if number is bigger,extended the sequence
            if(num>lastNum){
                newSequences.push([...seq,num])
            }
        }
        // case:2 Add the number as a new single-element sequence
        newSequences.push([num])
        // merge new sequence with existing ones
        sequence.push(...newSequences)
    }
    // 3) find the longest length
    let maxLength=Math.max(...sequence.map(seq=>seq.length))
    //4) filter only those sequence have max length
    let longestSequences=sequence.filter(seq=>seq.length===maxLength)
    //5) Remove duplicates(if any)
    let unique=[]
    for(let seq of longestSequences){
        // if unique doesnot in the sequence
        if(!unique.some(u=>JSON.stringify(u)===JSON.stringify(seq))){
            unique.push(seq)
        }
    }
    return unique
}

console.log(longestIncreasinSequence([10, 20, 15, 30, 22, 40]))
console.log(longestIncreasinSequence([6, 9, 2, 0, 5, 7, 8, 2, 8]))