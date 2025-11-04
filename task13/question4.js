/*
    4. Write a function which takes an array of integers and size values. 
    It should return back sub-arrays where each contains elements in the given size. 
    The last sub-array length can be less than given size.

    Test cases:
    Input: arr = [1,2,3,4,5], size = 1
    Output: [[1],[2],[3],[4],[5]]

    Input: arr = [1,9,6,3,2], size = 3
    Output: [[1,9,6],[3,2]]
*/
function subArray(arr,size){
    const result=[]
    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result
}



let testCase = [
  {
    input: [1,2,3,4,5],
    size: 1,
    expected:[[1],[2],[3],[4],[5]]
  },
  {
    input: [1,9,6,3,2],
    size:3,
    expected: [[1,9,6],[3,2]],
  }
]

testCase.forEach((num, index) => {
  let output = subArray(num.input,num.size);
  let pass = output.toString() === num.expected.toString();
  console.log("Tes1 :", index + 1, pass ? "Pass" : "Fail");
  console.log("Input :", num.input);
  console.log("Expected :", num.expected);
  console.log("Got :", output);
  console.log("-----------------------------");
});