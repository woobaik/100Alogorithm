export function addBorder(picture: string[]): string[] {
  // wrap the elemenet with "*" x 5
  // take first array element, and check the length
  // (maybe we can make an initial array ["*****"], ["*****"])
  // *for* each element wrapit with *(element)*
  // splice into the array

  const elementLength = picture[0].length; // EDGE: if its empty then =>

  let topBottmFrame = "";

  for (let i = 0; i < elementLength + 2; i++) {
    topBottmFrame += "*";
  }
  const result = new Array(2).fill(topBottmFrame);

  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
    result.splice(i + 1, 0, picture[i]);
  }

  return result;
}

console.log(addBorder(["abcd", "dedd", "dddd"]));
