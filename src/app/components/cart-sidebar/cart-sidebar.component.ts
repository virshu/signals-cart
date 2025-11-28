import { Component, HostListener, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UiService } from '../../services/ui.service';
import { CartComponent } from "../../pages/cart/cart.component";

@Component({
  selector: 'app-cart-sidebar',
  imports: [CartComponent],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss',
})
export class CartSidebarComponent {
  readonly isEmpty = inject(CartService).isEmpty;
  readonly uiService = inject(UiService);
  readonly isSidebarOpen = this.uiService.isSidebarOpen;
  
  @HostListener('document:keydown.escape', [])
  closeSidebar(): void {
    this.uiService.closeSidebar();
  }
}
