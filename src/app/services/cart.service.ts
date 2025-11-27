import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #items =   signal<CartItem[]> ([]);
  readonly items = this.#items.asReadonly();

  readonly totalItems = computed(() => {
    return this.#items().reduce((total, item) => total + item.quantity, 0);
  });

  readonly totalPrice = computed(() => {
    return this.#items().reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  });

  readonly isEmpty = computed(() => this.#items().length === 0);

  constructor() {
    // Automatically persist cart to localStorage on any cart change
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this.#items()));
    });
  }

  addItem(product: Product): void {
    const items = this.#items();
    const existingItemIndex = items.findIndex(
      (item) => item.product.id === product.id
    );
      if (existingItemIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        const updatedItems = [...items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        this.#items.set(updatedItems);
      } else {
        // If the product is not in the cart, add it with quantity 1
        this.#items.set([...items, { product, quantity: 1 }]);
      }
    }

  removeItem(productId: string): void {
    this.#items.set(
      this.#items().filter((item) => item.product.id !== productId)
    );
  }

  clearCart(): void {
    this.#items.set([]);
  }
}
