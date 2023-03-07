const calcAverage = (match1, match2, match3) => (match1 + match2 + match3) / 3;

// Test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  console.log(avgDolphins, avgKoalas);
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins team wins 🏆 (${avgDolphins} vs ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas team wins 🏆 (${avgDolphins} vs ${avgKoalas})`);
  else console.log(`No team wins... (${avgDolphins} vs ${avgKoalas})`);
};

checkWinner(avgDolphins, avgKoalas);

// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
