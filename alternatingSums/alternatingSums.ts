export function alternatingSums(a: number[]): number[] {
  let [evenTeam, oddTeam] = [0, 0];

  a.forEach((num, idx) =>
    idx % 2 === 0 ? (evenTeam += num) : (oddTeam += num)
  );

  return [evenTeam, oddTeam];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
