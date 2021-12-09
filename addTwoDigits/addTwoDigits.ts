export function addTwoDigits(n: any): number {
  const splitArray = n.toString().split("");

  return splitArray.reduce(
    (acc: string, curr: string) => acc + parseInt(curr),
    0
  );

  // parseInt(n[0]) + parseInt(n[1])
}

console.log(addTwoDigits(29));
