/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr: number[]): void {
  const longitud = arr.length
  let sumaMin = 0;
  let sumaMax = 0;
  const order = arr.sort((a, b) => a - b);

  for (let i = 1; i < longitud; i++) {
    sumaMax += order[i];
  }
  for (let i = 0; i < longitud - 1; i++) {
    sumaMin += order[i];
  }
  console.log(sumaMin, sumaMax);
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 3, 5, 7, 9];
  const result = miniMaxSum(testArray);
  console.log('Result: ', result);
}

main();
