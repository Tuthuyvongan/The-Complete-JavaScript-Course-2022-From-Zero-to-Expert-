const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}
// 2
let sum = 0;
odds = Object.values(game.odds);
for (let i of odds) {
  sum += i;
}
console.log(`Average odd: ${sum / odds.length}`);
// 3
for (let [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
  //   console.log(`Odd of victory ${game[team] ?? 'draw'}: ${odd}`);
}
// 4
let scorers = {};
for (let i of game.scored) {
  if (scorers[i]) scorers[i] += 1;
  else scorers[i] = 1;
}
console.log(scorers);
