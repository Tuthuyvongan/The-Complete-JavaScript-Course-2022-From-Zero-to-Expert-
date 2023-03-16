const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   let tip;
//   if (bill >= 50 && bill <= 300) tip = (bill * 15) / 100;
//   else tip = (bill * 20) / 100;
//   return tip;

const bills = [125, 555, 44];
const tips = [];
const total = [];
let tip;
for (let i = 0; i < bills.length; i++) {
  tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips);
console.log(total);
