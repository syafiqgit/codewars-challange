function positiveSum(arr: number[]): number {
  return arr
    .filter((number) => number > 0)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(positiveSum([1, 5, 9, 12, -8, -9]));
