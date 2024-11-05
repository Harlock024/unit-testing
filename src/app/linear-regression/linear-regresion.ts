export function linearRegression(input: string): {
  slope: number;
  intercept: number;
} {
  const pairs = input.split(",").map((pair) => {
    const [x, y] = pair.trim().split(" ").map(Number);
    return { x, y };
  });
  const n = pairs.length;
  const sumX = pairs.reduce((acc, point) => acc + point.x, 0);
  const sumY = pairs.reduce((acc, point) => acc + point.y, 0);
  const sumXY = pairs.reduce((acc, point) => acc + point.x * point.y, 0);
  const sumX2 = pairs.reduce((acc, point) => acc + Math.pow(point.x, 2), 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2));
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}
