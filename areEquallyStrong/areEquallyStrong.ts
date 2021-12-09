export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const you = strongMeasure(yourLeft, yourRight);
  const friend = strongMeasure(friendsLeft, friendsRight);

  return JSON.stringify(you) === JSON.stringify(friend);
}

const strongMeasure = (left, right) => {
  return [Math.min(left, right), Math.max(left, right)];
};

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
