import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  #productService = inject(ProductService);
  #cartService = inject(CartService);

  products = this.#productService.products;
  loading = this.#productService.loading;
  error = this.#productService.error;

  count = this.#cartService.totalItems;

}
