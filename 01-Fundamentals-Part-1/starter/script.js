// let js = "amazing";

// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// //Biến trong js bắt đầu từ 1 chữ thường. Những ký tự sau thì bắt đầu bằng chữ viết hoa. Không được đặt tên biến bắt đầu bằng số.
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;
// let person = "jonas";
// //Đặt tên in hoa toàn bộ cho giá trị hằng
// const PI = 3.1415;
// //Đừng đặt tên biến chỉ có 1 từ là name
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "Programer";
// let job2 = "Teacher";
// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");
// javascriptIsFun = "YES!";
// let year;
// console.log(typeof javascriptIsFun);
// console.log(year);
// console.log(typeof year);
// console.log(typeof year);
// year = 1991;
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const firstName = "Thu";
// const lastName = "Bui";
// console.log(firstName + " " + lastName);
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Thu";
// const job = "Software engineer";
// const birthYear = 1999;
// const year = 2022;
// const thu =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(thu);
// // Cách viết này chỉ hữu dụng khi dùng dấu ``; Xuống dòng tronh cụm `` không cần dùng \n\ chỉ cần Enter xuống dòng thôi
// const thuNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(thuNew);
// const thuNew1 = `I'm ${firstName}
// a ${year - birthYear}
// years old ${job}!`;
// console.log(thuNew1);

// const age = 23;

// if (age >= 18) {
//   console.log("Thu can start driving license");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Thu is too young. Wait another ${yearLeft} years`);
// }
// let century;
// const birthYear = 1999;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
//type conversation
// const inputYear = 1991;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);
// //type Coercion
// console.log("I am " + 23 + " years old");
// //Dấu trừ sẽ biến kiểu dữ liệu từ string thành number
// console.log("23" - "10" - 3);
// console.log("23" / 2);
// console.log("23" * 2);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
// if chỉ thực thi khi true
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You shound get a job!");
}

let height = 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}
