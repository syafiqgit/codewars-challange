// Cara 1
function hero1(bullets: number, dragon: number): boolean {
  if (bullets / 2 >= dragon) {
    return true;
  } else {
    return false;
  }
}
console.log(hero1(10, 5));
console.log(hero1(13, 7));
console.log(hero1(20, 10));

// Cara 2
function hero2(bullets: number, dragon: number): boolean {
  return bullets / 2 >= dragon;
}
console.log(hero2(30, 5));
console.log(hero2(45, 38));
console.log(hero2(20, 10));
