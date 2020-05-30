import { BasketService, IBasketProduct } from '@shared/services/basket.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss'],
})
export class BasketProductComponent {
  @Input() product: IBasketProduct;
  @Input() isSummary: boolean;

  get isProductMinimumStack() {
    return this.product.multiplication === 1;
  }

  constructor() {}

  add = () => (this.product.multiplication += 1);
  remove = () => (this.product.multiplication -= 1);
}
