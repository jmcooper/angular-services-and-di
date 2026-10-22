import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  imports: [CurrencyPipe],
  selector: 'bot-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  @Input() product!: Product;

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/images/' + product.imageName;
  }
}
