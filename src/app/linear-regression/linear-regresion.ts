export function calculateLinearRegression(data: {
  valueX: number[];
  valueY: number[];
}): {
  slope: number;
  intercept: number;
} {
  const { valueX, valueY } = data;
  const n = valueX.length;
  const sumX = valueX.reduce((acc, x) => acc + x, 0);
  const sumY = valueY.reduce((acc, y) => acc + y, 0);
  const sumXY = valueX.reduce((acc, x, i) => acc + x * valueY[i], 0);
  const sumX2 = valueX.reduce((acc, x) => acc + Math.pow(x, 2), 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2));
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}
