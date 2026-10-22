import { Component } from '@angular/core';
import { ProductDetails } from '../../product-details/product-details';
import { Product } from '../../product.model';
import { engineers } from './engineers';

@Component({
  imports: [ProductDetails],
  selector: 'bot-catalog',
  styleUrl: './squad-catalog.css',
  templateUrl: './squad-catalog.html',
})
export class SquadCatalog {
  squad: Product[] = engineers;
  private cart: Product[] = [];

  addToCart(engineer: Product) {
    this.cart.push(engineer);
  }
}
