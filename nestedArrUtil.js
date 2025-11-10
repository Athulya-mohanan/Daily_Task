export function NestedArrFunction(program,testcase){
   let result='Passed'
    if(Array.isArray(program) && Array.isArray(testcase)){
        if(program.length===testcase.length){
            for(let i=0;i<program.length;i++){
                if(Array.isArray(program[i] && Array.isArray(testcase))){
                    if(program[i].length===testcase[i].length){
                        for(let j=0;j<program[i].length;j++){
                            if(program[i][j]!==testcase[i][j]){
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
            }
        }
    }
    return result
}

console.log(NestedArrFunction([ [ 4 ], [ 1, 2, 3 ] ],[ [ 4 ], [ 1, 2, 3 ] ]))