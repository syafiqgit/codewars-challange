// Cara 1
export function smash1(words: string[]): string {
  return words.join(" ");
}
console.log(smash1(["hello", "world", "this", "is", "great"]));

export function smash2(words: string[]): string {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i !== words.length - 1) result += " ";
  }
  return result;
}
console.log(smash2(["hello", "world", "this", "is", "great"]));
