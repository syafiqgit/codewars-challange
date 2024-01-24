function twoSort(s: string[]): string {
  s.sort();
  const first = s[0];
  return first.split("").join("***");
}
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
