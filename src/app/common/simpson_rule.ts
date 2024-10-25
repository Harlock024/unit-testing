export function twoX(x: number): number {
  return 2 * x;
}

export function x2(x: number): number {
  return x * x;
}

export function oneOverX(x: number): number {
  return 1 / x;
}

export function t(t: number, dof: number): number {
  const ntr = gama((dof + 1) / 2);
  const dtr = Math.sqrt(dof * Math.PI) * gama(dof / 2);
  const factor = Math.pow(1 + (t * t) / dof, -dof + 1 / 2);

  return (ntr / dtr) * factor;
}

function gama(n: number): number {
  return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
}
