export function lovefunc(flower1: number, flower2: number): boolean {
  if (flower1 % 2 === 0 && flower2 % 2 === 1) return true;
  if (flower2 % 2 === 0 && flower1 % 2 === 1) return true;
  return false;
}

console.log(lovefunc(15, 35));
