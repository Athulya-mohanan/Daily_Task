function dayDifference(date1,date2){
    if(typeof(date1)!=="string"||typeof(date2)!=="string"||date1.trim().length===0||date2.trim().length===0) return "Invalid input"
    let dateA=new Date(date1)
    let dateB=new Date(date2)
    const differenceMin=Math.abs(dateA-dateB)
    const dayDifference=differenceMin/(1000*60*60*24)
    return dayDifference

    
}
// dayDifference("2004-05-30", "2002-10-20")

let testCase=[
    {
        inp1:"2004-05-30",
        inp2:"2002-10-20",
        expected:588
    } ,{
        inp2:"2004-05-30",
        inp1:"2002-10-20",
        expected:588
    },
    {
       inp1:2004-5-30,
        inp2:2002-10-20,
        expected:"Invalid input" 
    },
    {
        inp1:null,
        inp2:"2002-10-20",
        expected:"Invalid input" 
    },
    {
        inp1:undefined,
        inp2:"2002-10-20",
        expected:"Invalid input" 
    },
    {
        inp1:NaN,
        inp2:"2002-10-20",
        expected:"Invalid input" 
    },
    {
        inp1:[],
        inp2:"2002-10-20",
        expected:"Invalid input" 
    },
    {
        inp1:"",
        inp2:"2002-10-20",
        expected:"Invalid input" 
    },
    {
       inp1:"  ",
        inp2:"2002-10-20",
        expected:"Invalid input"  
    },
    {
       inp1:{},
        inp2:"2002-10-20",
        expected:"Invalid input"  
    },
    {
       inp1:[],
        inp2:"2002-10-20",
        expected:"Invalid input"  
    },
    {
       inp1:["hello"],
        inp2:"2002-10-20",
        expected:"Invalid input"  
    },
    {
        inp1:{name:"Athulya"},
        inp2:"2002-10-20",
        expected:"Invalid input"  
    },
     {
        inp1:123,
        inp2:"2002-10-20",
        expected:"Invalid input"  
    },
     {
        inp1:"2002-10-20",
        inp2:"2002-10-20",
        expected:0
    },
]


testCase.forEach((num,index)=>{
        let output=dayDifference(num.inp1,num.inp2)
       let pass=output.toString()===num.expected.toString()
        console.log(`Test: ${index+1}`,pass?"Pass":"Fail")
        console.log("Input :",num.inp1,num.inp2)
        console.log("Expected :",num.expected)
        console.log("Got :",output)
        console.log("---------------------------------")
})