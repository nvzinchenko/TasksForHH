/* Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
 * Например, на вход переданы 2 числа: от 11 до 20 (диапазон считается включая граничные значения). На выходе программа должна выдать
 * [11, 13 , 17, 19].
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let minNumber, maxNumber;
let arr = [];

console.log('\x1b[32m%s\x1b[0m', '[ Поиск простых чисел в диапазоне ]');
rl.question('Введите минимальное число диапазона: ', (min) => {
  rl.question('Введите максимальное число диапазона: ', (max) => {
    minNumber = parseInt(min);
    maxNumber = parseInt(max);
    addPrimeNumbersToArray(minNumber, maxNumber);
    console.log(`Массив простых чисел в диапазоне от ${minNumber} до ${maxNumber}: ${outputArray(arr)}`);
    rl.close();
  });
});

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
function addPrimeNumbersToArray(min, max) {
  for (i = min; i <= max; i++) {
    if (isPrime(i)) arr.push(i);
  }
}
function outputArray(arr) {
  let str = '[';
  arr.forEach((num) => {
    str += num + ', ';
  });
  str = str.slice(0, -2) + ']';
  return str;
}
