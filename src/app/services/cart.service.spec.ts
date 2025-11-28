import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from '../models/product';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
    service = TestBed.inject(CartService);
    spyOn(localStorage, 'setItem');
  });

  it('adds product and  persists to localStorage', () => {
    const product: Product = { id: 'p1', title: 'Test Product', price: 100 };
    service.addItem(product);
    TestBed.tick();
    expect(service.totalItems()).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ product, quantity: 1 }]));
  });

  it('removes product and persists to localStorage', () => {
    const product: Product = { id: 'p3', title: 'Test Product', price: 100 };
    service.addItem(product);
    TestBed.tick();
    service.removeItem('p3');
    TestBed.tick();
    expect(service.totalItems()).toBe(0);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
  });

  it('clears cart and persists to localStorage', () => {
    const product: Product = { id: 'p4', title: 'Test Product', price: 100 };
    service.addItem(product);
    TestBed.tick();
    service.clearCart();
    TestBed.tick();
    expect(service.totalItems()).toBe(0);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
  });
});

