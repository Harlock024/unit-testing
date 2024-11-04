export function calculateStdDev(input: string): number {
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));

  const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  const variance =
    numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
    numbers.length;

  return Math.sqrt(variance);
}
