import { atom } from 'nanostores';
import type { Product } from '../types';

export const products = typeof window === 'undefined' ? atom<Product[]>([]) : atom<Product[]>(window.__INITIAL_DATA__);
