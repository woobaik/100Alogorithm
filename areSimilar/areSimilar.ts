export function areSimilar(a: number[], b: number[]): boolean {
  return (
    JSON.stringify(a.sort((a, b) => a - b)) ===
    JSON.stringify(b.sort((a, b) => a - b))
  );
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
