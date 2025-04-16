import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomNumber(
  min: number,
  max: number,
  step: number,
): number {
  if (step <= 0) {
    throw new Error('Step must be a positive number.');
  }

  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value.');
  }

  const range = max - min;
  const numberOfSteps = Math.floor(range / step) + 1;
  const randomIndex = Math.floor(Math.random() * numberOfSteps);
  return min + randomIndex * step;
}
