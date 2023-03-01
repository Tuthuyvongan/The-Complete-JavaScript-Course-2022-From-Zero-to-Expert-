////////////////////////////////////
// strict mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

////////////////////////////////////
// Functions
// function logger() {
//   console.log("My name is Thu");
// }
// // calling /running /invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// console.log(fruitProcessor(5, 0));

// const applesOrangesJuice = fruitProcessor(2, 4);
// console.log(applesOrangesJuice);

// const num = Number("23");

////////////////////////////////////
// Function Declarations vs. Expressions

//Có thể khai báo tên funcion trước khi định nghĩa function (Do hoisting) ( Không hoạt động với hàm ẩn danh vì nó là biểu thức(expression))
//const age1 = calcAge1(1999);
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1999);

// //This function here is a expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1999);

// console.log(age1, age2);

////////////////////////////////////
// Arrow Functions
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1999, "Thu"));
// console.log(yearsUntilRetirement(1980, "Bob"));

////////////////////////////////////
// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

////////////////////////////////////
// Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   // return retirement;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1999, "Thu"));
// console.log(yearsUntilRetirement(1950, "Mike"));

////////////////////////////////////
//
