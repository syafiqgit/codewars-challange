// Cara 1
function countBy1(x: number, n: number): number[] {
  let z: number[] = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}
console.log(countBy1(1, 10));

// Cara 2
function countBy2(x: number, n: number): number[] {
  return [...Array(n)].map((value, index) => (index + 1) * x);
}
console.log(countBy2(1, 10));
