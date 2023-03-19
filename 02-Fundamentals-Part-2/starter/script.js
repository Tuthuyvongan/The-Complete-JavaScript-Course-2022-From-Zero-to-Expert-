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
// Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const year = new Array(1999, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Michael", "Jay", "Peter"];

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1971, "teacher", friends];
// console.log(jonas);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

////////////////////////////////////
// Basic Array Operations
// const friends = ["Michael", "Steven", "Peter"];

// //Add elements to an array
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //Remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

////////////////////////////////////
// Objects
// const thu = {
//   firstName: "Thu",
//   lastName: "Bui",
//   age: 2023 - 1999,
//   job: "student",
//   friends: ["A", "B", "C"],
// };
// console.log(thu);
// console.log(thu.lastName);
// console.log(thu["lastName"]);

// const nameKey = "Name";
// console.log(thu["first" + nameKey]);
// console.log(thu["last" + nameKey]);

// // const interestedIn = prompt(
// //   "What do you want to know about me? Choose between firstName, lastName, age, job and friends"
// // );
// // if (thu[interestedIn]) {
// //   console.log(thu[interestedIn]);
// // } else {
// //   console.log("Wrong request");
// // }

// thu.location = "Quang Ngai";
// thu["twitter"] = "@leonceWang";
// console.log(thu);

// //Challenge
// // Jonas has 3 friends and his best friend is called Michael
// const jonas = {
//   firstName: "Jonas",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
// );

////////////////////////////////////
// Object Methods
const thu = {
  firstName: "Thu",
  lastName: "Bui",
  birthYear: 1999,
  job: "student",
  friends: ["A", "B", "C"],
  hasDiversLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2023 - birthYear;
  //   },
  //   calcAge: function () {
  //     console.log(this);
  //     return 2023 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} student and she has ${
      this.hasDiversLicense ? "a" : "no"
    } driver's license`;
  },
};
console.log(thu.calcAge());
console.log(thu.age);
console.log(thu.age);
console.log(thu.age);
// console.log(thu["calcAge"](1999));

// Challenge
// Thu is a 24 year old student and she has a driver's license
console.log(thu.getSummary());
