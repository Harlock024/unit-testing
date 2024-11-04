export function linearRegression(input: string): {
  slope: number;
  intercept: number;
} {
  const pairs = input.split(",").map((pair) => {
    const [x, y] = pair.trim().split(" ").map(Number);
    if (isNaN(x) || isNaN(y)) {
      throw new Error(
        "Cada par debe contener dos números separados por un espacio.",
      );
    }
    return { x, y };
  });

  if (pairs.length < 2) {
    throw new Error(
      "Se necesitan al menos dos puntos para realizar una regresión lineal.",
    );
  }

  const n = pairs.length;
  const sumX = pairs.reduce((acc, point) => acc + point.x, 0);
  const sumY = pairs.reduce((acc, point) => acc + point.y, 0);
  const sumXY = pairs.reduce((acc, point) => acc + point.x * point.y, 0);
  const sumX2 = pairs.reduce((acc, point) => acc + Math.pow(point.x, 2), 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2));
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}
