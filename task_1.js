/* Задача 1. Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку,
 * содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа.
 * Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер",
 * а для числа 1048 — "1048 компьютеров".
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Введите целое число: ', (answer) => {
  declension(answer);
  rl.close();
});

function declension(n) {
  let ending = '';
  if (n % 100 == 1) {
  } else if (n % 10 == 0 || (n % 10 >= 5 && n % 10 <= 9) || (n % 100 >= 11 && n % 100 <= 14)) {
    ending = 'ов';
  } else if (n % 10 >= 2 && n % 10 <= 4 && n != 12 && n != 13 && n != 14) {
    ending = 'а';
  }
  console.log(`${n} компьютер` + ending);
}
