function isEven(list){
    if(!Array.isArray(list)|| list.length===0) return "Invalid input"
    let evenlist=[]
    for( i in list){
        // if(typeof(i)!=="number") return "Invalid input"
        if(list[i]%2==0 ) 
            evenlist.push(list[i])
    }
    return evenlist
}
testCase=[
    {
        input:[2, 4, 6, 8, 10],
        expected:[2,4,6,8,10]

    },
    {
        input:[2, -4, 6, -8, 10],
        expected:[2,-4,6,-8,10]

    },
     {
        input:[2, -4, 6, -8, 10.5],
        expected:[2,-4,6,-8]

    },
    {
        input:["hello","there"],
        expected:[]
    },
    {
        input:"",
        expected:"Invalid input"
    },
     {
        input:[3,5,7],
        expected:[]
    },
     {
        input:[3,5,7],
        expected:[]
    },
     {
        input:["Hi",2,3,5,7],
        expected:[2]
    },
    {
        input:123,
        expected:"Invalid input"
    },
     {
        input:[3,5,7],
        expected:[]
    },
     {
        input:[],
        expected:"Invalid input"
    },
     {
        input:"hello",
        expected:"Invalid input"
    },
    {
        input:[1.5,2.6,8.9],
        expected:[]
    },
    {
        input:null,
        expected:"Invalid input"
    },
     {
        input:undefined,
        expected:"Invalid input"
    },

]
testCase.forEach((num,index)=>{
    let output=isEven(num.input)
    const pass=output.toString()===num.expected.toString()
    console.log(`Test ${index+1} :`, pass?"Passed":"Failed")
         console.log(`Input : ${num.input}`)
        console.log(`Expected : ${num.expected}`)
        console.log(`Got :${output}`)
        console.log("----------------------------------------")
})