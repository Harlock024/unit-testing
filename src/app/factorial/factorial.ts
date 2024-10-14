export function factorial(n: number): number {
  let r = 1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
