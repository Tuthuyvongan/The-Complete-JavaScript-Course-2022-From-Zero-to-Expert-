//Node CodingChalleng3.js
//Test Data 1
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);
// if (averageScoreDolphins > averageScoreKoalas) {
//   console.log("Team Dolphins wins a trophy");
// } else if (averageScoreDolphins < averageScoreKoalas) {
//   console.log("Team Koalas wins a trophy");
// } else if (averageScoreDolphins === averageScoreKoalas) {
//   console.log("2 team draw");
// }
//Test Data Bonus 1
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Team Dolphins win the trophy");
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log("Team Koalas win the trophy");
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins >= 100 &&
  averageScoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else if (averageScoreDolphins === averageScoreKoalas) {
  console.log("No one win the trophy");
}
