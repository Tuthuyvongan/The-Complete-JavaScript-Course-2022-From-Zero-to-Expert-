document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
textarea = document.querySelector('textarea');

const convert = function () {
  let text = textarea.value;
  //   let texts = text.toLowerCase().split('\n');
  //   let camelCases = [];
  //   for (const t of texts) {
  //     let index = t.indexOf('_');
  //     camelCases.push(
  //       t.trim().replace(t[index] + t[index + 1], t[index + 1].toUpperCase())
  //     );
  //   }
  //   for (let i = 0; i < camelCases.length; i++) {
  //     console.log(`${camelCases[i]} ${'✅'.repeat(i + 1)}`);
  //   }
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
};

document.querySelector('button').addEventListener('click', convert);
