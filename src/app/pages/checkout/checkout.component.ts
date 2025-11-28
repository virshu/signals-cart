import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cart = inject(CartService);
  router = inject(Router);

  readonly items = this.cart.items;
  readonly totalPrice = this.cart.totalPrice;
  readonly isEmpty = this.cart.isEmpty;
  readonly confirmed = signal(false);

  confirmOrder() {
    this.confirmed.set(true);
    this.cart.clearCart();
    // Optionally navigate to a confirmation page or home
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

}
