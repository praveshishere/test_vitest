export function getRandomIntegerInRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function choose<T>(arr: T[]) {
  const idx = getRandomIntegerInRange(0, arr.length - 1);
  return arr[idx];
}