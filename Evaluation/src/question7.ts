/**Write a function to return only valid emails without using regex.
An email is considered valid only if:
It contains exactly one @ symbol.
It has a non-empty local part (before @).
Local part must contain only letters, digits, dots (.), underscores (_), and hyphens
(-).
It cannot start or end with .
It cannot have consecutive dots (“..”).
It has a non-empty domain part (after @).
Domain must contain at least one dot (.).
Domain name parts must be letters or digits only (no hyphens at start/end).
The last part (TLD) must be at least 2 letters (e.g., .com, .in, .org).
No spaces allowed anywhere. */

function emailValidation(email: string) {
  let letters = [
"A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  ];
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  if (email.indexOf("@") !== email.lastIndexOf("@")) return "Invalid1";
  let indexofAt = email.indexOf("@");
  let local = email.slice(0, indexofAt);
  let domain = email.slice(indexofAt);
  if (local.length === 0 || domain.length <= 1) return "Invalid2";
  if (local[0] === ".") return "Invalid3";
  if (!domain.includes(".")) return "Invalid6";
  for (let i = 0; i < local.length; i++) {
    if (local[i] === "." && local[i + 1] === ".") return "Invalid4";
  }
  let localpart;
  for (let letter of local) {
    for (let alp of letters) {
      if (letter !== alp || letter !== alp.toLowerCase()) {
        for (let dig of digits) {
        if (letter !== dig.toString()) {
            if (letter != "." || letter != "_" || letter != "-"){
                return "Invalid5"
            }
        }
         
          
      }
      }
      
    }
  }
//   if (localpart !== true) return "Invalid5";
//   let domainpart=false;
//   for (let letter of domain) {
//     for (let alp of letters) {
//       if (letter === alp || letter === alp.toLowerCase()) domainpart = true;
//       for (let dig of digits) {
//         if (letter === dig.toString()) domainpart = true;
//       }
//     }
//   }
//   if (domainpart !== true) return "Invalid7";
}
console.log(emailValidation("1A@.-"));
