export function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;

  return isEven ? a[(a.length - 2) / 2] : a[Math.floor(a.length - 1) / 2];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
