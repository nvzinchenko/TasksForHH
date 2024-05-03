/* Задача 4. Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число,
 * до которого выводит таблицу умножения. В консоли должна появиться таблица.
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;

console.log('Таблица Пифагора');
rl.question('До какого числа хотите вывести на экран таблицу Пифагора? ', (answer) => {
    num = parseInt(answer);
    rl.close();
  }
);
rl.on('close', () => outputPythagoreanTable());

function PythagoreanTable(inputNum) {
  let arr = [];
  for (let i = 1; i <= inputNum; i++) {
    arr[i] = [];
    for (let j = 1; j <= inputNum; j++) {
      arr[i].push(j * i);
    }
  }
  arr = arr.splice(1, num);
  return arr;
}
function outputPythagoreanTable() {
  let a = PythagoreanTable(num);
  let len = a.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        if (a[i][j] < 10) {
          str += '  ' + a[i][j];
        } else str += ' ' + a[i][j];
      }
      if (a[i][j] < 10) {
        str += '  ' + a[i][j] + ' ';
      } else if (a[i][j] >= 10 && a[i][j] < 100) {
        str += ' ' + a[i][j] + ' ';
      } else {
        str += a[i][j] + ' ';
      }
    }
    if (i === 0) {
      let del1 = str.slice(3);
      console.log('   ' + del1);
    }
    console.log(str);
    str = '';
  }
}
