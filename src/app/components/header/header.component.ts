import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,
    CurrencyPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  #cart = inject(CartService);
  #auth = inject(AuthService);
  #router = inject(Router);

  readonly cartItemCount = this.#cart.totalItems;
  readonly totalPrice = this.#cart.totalPrice;
  readonly isEmpty = this.#cart.isEmpty;

  readonly isLoggedIn = this.#auth.isLoggedIn;
  readonly username = this.#auth.username;

  logout() {
    this.#auth.logout();
    this.#router.navigateByUrl('/');
  }
}