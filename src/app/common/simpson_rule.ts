export function fx_2x(x: number) {
  return 2 * x;
}

export function fx_x2(x: number) {
  return x * x;
}

export function fx_1_x(x: number) {
  if (x === 0) throw new Error("Error");
  return 1 / x;
}
