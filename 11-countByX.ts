function countBy(x: number, n: number) {
  let z: number[] = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

console.log(countBy(5, 10));
