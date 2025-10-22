// function extractUsername(email){
//     for(let i=0;i<email.length;i++){
//         if(email[i]==='@'){
//             console.log(email.slice(0,i))
//         }
//     }
// }
// extractUsername("athulya@gmail.com")


// next-vers
function extractUsername(email){
    return email.split('@')[0]
}
console.log(extractUsername("athulyasmohanan@gmail.com"))