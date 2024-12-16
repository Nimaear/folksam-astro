import { atom } from 'nanostores';
import type { Product } from '../types';

export const counter = atom(0);

export const increment = () => {
  counter.set(counter.get() + 1);
}
