import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private readonly cart = inject(CartService);

  readonly cartItems = this.cart.items;
  readonly cartTotal = this.cart.totalPrice;
  readonly isEmpty = this.cart.isEmpty;

  removeItem(productId: string): void {
    this.cart.removeItem(productId);
  }

}
