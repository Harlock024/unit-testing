export function media(numbers: string) {
  let parse = numbers.split(",").map(Number);
  let result = 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < parse.length; i++) {
    sum += parse[i];
    count++;
  }
  result = sum / count;
  return result;
}
