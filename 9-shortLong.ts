function ShortLong(a: string, b: string): string {
  if (a.length < b.length) return a + b + a;
  return b + a + b;
}
console.log(ShortLong("45", "1"));
