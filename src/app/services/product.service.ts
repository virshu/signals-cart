import { computed, effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly resource = httpResource<Product[]>(() => 'https://fakestoreapi.com/products');
  readonly products = this.resource.value;
  readonly loading = this.resource.isLoading;
  readonly error = this.resource.error;

  readonly count = computed(() => this.products()?.length ?? 0);

  constructor() { 
    effect(() => {
      if (this.error()) {
        console.error('Error loading products:', this.error());
      }
    });
  }

}