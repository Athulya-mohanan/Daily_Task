export function utilFunction(program,testcase){
   let result='Passed'
    if(Array.isArray(program) && Array.isArray(testcase)){
        if(program.length===testcase.length){
            for(let i=0;i<program.length;i++){
                if(program[i]!==testcase[i]){
                    result='Failed'
                    break;
                }
            }
        }else{
            result='Failed'
        }
    }else{
        result = program===testcase ? 'Passed': 'Failed'
    }
    return result
}

// console.log(utilFunction([ [ 2, 7 ], [ 9, 1 ], [ 0, 5 ] ],[ [ 2, 7 ], [ 9, 1 ], [ 0, 5 ] ]))