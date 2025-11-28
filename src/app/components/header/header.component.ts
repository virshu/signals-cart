import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink,
    CurrencyPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly cartService = inject(CartService);
  readonly cartItemCount = this.cartService.totalItems;
  readonly totalPrice = this.cartService.totalPrice;
}
