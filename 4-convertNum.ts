function ConvertNum(n: number): number[] {
  const result = n
    .toString()
    .split("")
    .reverse()
    .map((res) => parseInt(res));
  return result;
}
console.log(ConvertNum(50));

