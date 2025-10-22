let num = 100;
if (num > 50) {
  for (let li = 0; li <= 5; li++) {
    console.log(li);
  }
  try {
    console.log(li);
  } catch (error) {
    console.log("let variables scope is inside the block only", error);
  }

  for (var vi = 0; vi <= 5; vi++) {
    console.log(vi);
  }
  try{
    console.log(vi)
  }
  catch(error){
        console.log(error)
  }
}
