// 6. Password Strength Checker

// Description:
// Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:

// Weak → less than 6 characters

// Medium → at least 6 chars, includes either number or special character

// Strong → at least 8 chars, includes upper, lower, number, and special character

function passwordStrengthCheceker(pass) {
  let splitedpass = pass.split("");
  let passlength = splitedpass.length;
  let result;
  let special = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let smLetters = /[a-z]/g;
  let capsLetters = /[A-Z]/g;
  if (passlength < 6) {
    result = "Weak";
  } else if (
    pass.length >= 8 &&
    smLetters.test(pass) &&
    capsLetters.test(pass)
  ) {
    for (let i of special) {
      for (let j of nums) {
        if (pass.includes(i) && pass.includes(j)) {
          result = "strong";
        }
      }
    }
  } 
  else if(pass.length>=6){
    for (let i of special) {
      for(let j of nums){
        if (pass.includes(i) || pass.includes(j)) {
        result = "Medium";
      }
      }
      
    }
  }
  return result;
}
console.log(passwordStrengthCheceker("12dd"));

