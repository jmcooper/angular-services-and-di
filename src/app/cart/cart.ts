import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';
import { Product } from '../product.model';

@Component({
  imports: [CurrencyPipe, ProductDetails],
  selector: 'bot-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  private cart: Product[] = [];

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: Product) {
    this.cart.filter((p) => p.id !== product.id);
  }
}
