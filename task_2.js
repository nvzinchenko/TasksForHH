/* Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины.
 * Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных чисел.
 * В примере это будет [2, 3, 6].
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = new Array();

rl.question(
  "Введите массив положительных целых чисел произвольной длины через запятую и нажмите клавишу 'Enter': ", (array) => {
    if (addToArray(array)) console.log('Массив успешно заполнен:', arr);
    menu();
  }
);

rl.on('close', () => {
  arr.sort((a, b) => a - b);
  let gcd = greatestCommonDivisor(arr);
  let result = divisorsOfNumber(gcd);
  if (result) console.log('Общие делители для всех указанных чисел в массиве', result);
  else console.log('Общие делители для всех указанных чисел в массиве отсутствуют.')
  process.exit(0);
});

function addToArray(input) {
  let array = new Array();
  let str = input.split(',').filter((x) => x.trim().length && !isNaN(x));
  for (i = 0, len = str.length; i < len; i++) array.push(Number.parseInt(str[i]));
  array = array.filter((item) => item > 0);
  let output = '';
  for (i = 0, len = array.length; i < len; i++) output += array[i] + ', ';
  output = output.slice(0, -2);
  if (array.length === 1) {
    console.log(`Число ${output} добавлено в массив`);
    arr = arr.concat(array.filter((item) => item > 0));
    return true;
  } else if (array.length > 1) {
    console.log(`Числа ${output} добавлены в массив`);
    arr = arr.concat(array.filter((item) => item > 0));
    return true;
  } else 
    console.log(`Ваш ввод ${input} не был добавлен к массиву`);
}

function menu() {
  rl.question("Хотите добавить числа к массиву? 'y/n': ", (userInput) => {
    switch (userInput.trim()) {
      case 'n':
      case 'N':
        return rl.close();
      case 'y':
      case 'Y':
        rl.question("Введите массив положительных целых чисел произвольной длины через запятую и нажмите клавишу 'Enter': ", (line) => {
          if (addToArray(line)) console.log('Массив успешно заполнен:', arr);
          menu();
        });
        break;
      case '':
      case ' ':
        console.log('Вы ничего не ввели.');
        menu();
        break;
      default:
        console.log('Проверьте ваш ввод');
        menu();
        break;
    }
  });
}

function greatestCommonDivisor(arr) {
  let x = arr[0];
  for (let i = 1, len = arr.length; i < len; i++) {
    let y = arr[i];
    while (x && y) x > y ? (x %= y) : (y %= x);
    x += y;
  }
  return x;
}

function divisorsOfNumber(num) {
  let array = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) array.push(i);
  }
  if (array.length >= 1) return array;
  else return false;
}
