const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// 1
let events = [...new Set(gameEvents.values())];
console.log(events);
// 2
gameEvents.delete(64);
// 3

// 4
for (let [min, event] of gameEvents) {
  min <= 45
    ? console.log(`[FIRST HALF] ${min}: ${event}`)
    : console.log(`[SECOND HALF] ${min}: ${event}`);
}

console.log(`An event happened, on 
average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on 
average, every ${time / gameEvents.size} minutes`);
