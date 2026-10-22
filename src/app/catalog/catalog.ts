import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';
import { Product } from '../product.model';
import { productsArray } from './products-data';

@Component({
  imports: [ProductDetails],
  selector: 'bot-catalog',
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {
  products: Product[] = productsArray;
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
