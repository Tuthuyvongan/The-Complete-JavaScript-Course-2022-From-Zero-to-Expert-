//node CodingChalleng4.js
let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
switch (bill) {
  case 275:
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);
    break;
  case 40:
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);
    break;
  case 430:
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);
    break;
  default:
    console.log("Not a valid value!");
}
