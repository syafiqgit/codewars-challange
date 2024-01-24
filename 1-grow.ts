// Cara 1
function grow1(x: number[]) {
  let result = x[0];

  for (let i = 0; i < x.length; i) result *= x[i];

  return result;
}
console.log(grow1([1, 2, 3, 4, 5]));
console.log(grow1([2, 3, 4, 5, 6]));
console.log(grow1([7, 8, 9, 10, 11]));

// Cara 2
function grow2(x: number[]) {
  return x.reduce((acc, curr) => acc * curr, 1);
}
console.log(grow2([1, 2, 3, 4, 5]));
console.log(grow2([2, 3, 4, 5, 6]));
console.log(grow2([7, 8, 9, 10, 11]));
