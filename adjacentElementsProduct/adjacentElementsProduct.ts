export function adjacentElementsProduct(inputArray: number[]): number {
  // initial thought
  //[3, 6, -2, -5, 7, 3]
  // i  i+1   until i < arr.length - 1

  let max = Infinity * -1;

  for (let i = 0; i < inputArray.length - 1; i++) {
    max = Math.max(max, inputArray[i] * inputArray[i + 1]);
  }

  return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
