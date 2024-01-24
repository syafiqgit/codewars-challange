// Cara 1
function reverseSeq1(x: number) {
  const result: number[] = [];

  for (let i = x; i >= 1; i--) {
    result.push(i);
  }

  return result;
}
console.log(reverseSeq1(5));

// Cara 2
function reverseSeq2(x: number) {
  return [...Array(x)].map((_num, i) => x - i);
}
console.log(reverseSeq2(5));
