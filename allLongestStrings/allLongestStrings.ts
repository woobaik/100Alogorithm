export function allLongestStrings(inputArray: string[]): string[] {
  let maxLength = inputArray[0].length;

  for (let i = 0; i < inputArray.length; i++) {
    maxLength = Math.max(maxLength, inputArray[i].length);
  }

  return inputArray.filter((element) => element.length === maxLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
