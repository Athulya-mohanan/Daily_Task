function isPrime(num) {
  let result;
  if(num==0||num==1){
    result="Enter a valid number(0 and 1 are not valid)"
  }
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}
console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(29));
