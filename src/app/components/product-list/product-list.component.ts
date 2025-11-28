import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  #cartService = inject(CartService);
  products = input.required<Product[] | undefined>();

  addToCart(productId: string) {
    const product = this.products()?.find(p => p.id === productId);
    if (product) {
      this.#cartService.addItem(product);
    }
  }
}
