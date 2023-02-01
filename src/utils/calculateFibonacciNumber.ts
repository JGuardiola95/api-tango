export default function calculateFibonacciNumber(number: number): number {
  let result = 1;
  if (number <= 0) {
    result = 0;
  } else if (number === 1) {
    result = 1;
  } else {
    result = calculateFibonacciNumber(number - 1) + calculateFibonacciNumber(number - 2);
  }
  return result;
}
