//Test data 1
const data1MarksWeights = 78;
const data1MarksTall = 1.69;
const data1JohnWeights = 92;
const data1JohnTall = 1.95;
//Test data 2
const data2MarksWeights = 95;
const data2MarksTall = 1.88;
const data2JohnWeights = 85;
const data2JohnTall = 1.76;

let marksBIM;
let johnBIM;
let markHigherBMI;

marksBIM = data1MarksWeights / data1MarksTall ** 2;
johnBIM = data1JohnWeights / data1JohnTall ** 2;
// marksBIM = data2MarksWeights / data2MarksTall ** 2;
// johnBIM = data2JohnWeights / data2JohnTall ** 2;
console.log(marksBIM);
console.log(johnBIM);
markHigherBMI = marksBIM > johnBIM;
console.log(markHigherBMI);
