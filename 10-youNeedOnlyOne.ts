export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.indexOf(x) > -1;
};

console.log(check([1, 2, "test"], 3));
