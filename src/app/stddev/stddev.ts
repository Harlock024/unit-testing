export function calculateStdDev(input: string): number {
  // Convertimos la cadena en un arreglo de números
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));

  if (numbers.length === 0 || numbers.some(isNaN)) {
    throw new Error(
      "La cadena debe contener solo números separados por comas.",
    );
  }

  const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

  const variance =
    numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
    numbers.length;

  return Math.sqrt(variance);
}
