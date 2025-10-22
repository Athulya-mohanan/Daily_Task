let toConverted=["42",'42px'," ",'null',null,undefined,true,false]
for(let convt of toConverted){
    console.log(Number(convt))
    console.log(typeof(Number(convt)))
}