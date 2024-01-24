function findMultiples(integer: number, limit: number): number[] {
  const a: number[] = [];
  let increment = 1;
  while (increment * integer <= limit) {
    a.push(increment * integer);
    increment++;
  }
  return a;
}
console.log(findMultiples(5, 25));
