function billboard(name: string, price: number = 30): number {
  let total = 0;
  for (const _ of name) total += price;
  return total;
}
console.log(billboard("syafiq", 30));
