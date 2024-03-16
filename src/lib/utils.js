import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ethers } from 'ethers';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function stringToBytes32(text) {
  return ethers.encodeBytes32String(text);
}
