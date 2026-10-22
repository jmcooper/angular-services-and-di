import { Component } from '@angular/core';
import { ProductDetails } from '../../product-details/product-details';
import { Product } from '../../product.model';
import { productsArray } from '../products-data';

@Component({
  imports: [ProductDetails],
  selector: 'bot-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {
  products: Product[] = [...productsArray];
  searchTerm: string = '';
  cart: Product[] = [];

  ngOnInit() {
    this.products = [...productsArray];
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter((product: Product) =>
          product.name.toLowerCase().includes(this.searchTerm),
        );
  }
}
