// Cara 1
export function DNAtoRNA1(dna: string): string {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      result += "U";
    } else {
      result += dna[i];
    }
  }
  return result;
}
console.log(DNAtoRNA1("GCAT"));

// Cara 2
export function DNAtoRNA2(dna: string): string {
  return dna
    .split("")
    .map((value) => (value === "T" ? "U" : value))
    .join("");
}
console.log(DNAtoRNA2("GCAT"));
