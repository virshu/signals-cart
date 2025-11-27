import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  #products = signal<Product[]>([]);
  #loading = signal<boolean>(false);

  readonly products = this.#products.asReadonly();
  readonly loading = this.#loading.asReadonly();
  readonly count = computed(() => this.#products().length);

  constructor() { 
    this.#loading.set(true);
    setTimeout(() => {
      this.#products.set([
        { id: '1', title: 'Product 1', price: 10 },
        { id: '2', title: 'Product 2', price: 20 },
        { id: '3', title: 'Product 3', price: 30 },
      ]);
      this.#loading.set(false);
    }, 2000);
  }

  setLoading(loading: boolean) {
    this.#loading.set(loading);
  }
}