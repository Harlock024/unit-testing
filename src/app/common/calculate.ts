export function sumX(xData: number[]): number {
  return xData.reduce((acc, curr) => acc + curr, 0);
}
export function sumY(y: number[]): number {
  return y.reduce((acc, val) => acc + val, 0);
}

export function sumXX(x: number[]) {
  return x.reduce((acc, val) => acc + val ** 2, 0);
}

export function sumXY(x: number[], y: number[]): number {
  return x.reduce((acc, val, index) => acc + val * y[index], 0);
}

export function sumYY(
  yData: number[],
  b0: number,
  b1: number,
  xData: number[],
): number {
  return yData.reduce((acc, curr, index) => {
    const predictedY = b0 + b1 * xData[index];
    return acc + Math.pow(curr - predictedY, 2);
  }, 0);
}