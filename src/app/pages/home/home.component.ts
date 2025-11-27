import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  products = this.productService.products;
  loading = this.productService.loading;

  count = this.cartService.totalItems;

  addToCart(productId: string): void {
    const product = this.products().find(product => product.id === productId);
    if (product) {
      this.cartService.addItem(product);
    }
  }

}
