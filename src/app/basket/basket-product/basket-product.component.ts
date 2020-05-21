import { SummaryService } from '@shared/services/summary.service';
import { BasketService } from '../../shared/services/basket.service';
import { IProduct } from '@shared/models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent {
  @Input() product: IProduct;

  public multiplication = 1;

  get isSummary() {
    return this._summaryService.isSummary;
  }
  get isProductMinimumStack() {
    return this.multiplication === 1;
  }

  constructor(
    private _basketService: BasketService,
    private _summaryService: SummaryService 
  ) {}

  add = () => {
    this.multiplication += 1;
    if (this.product.inBasket) {
      this._basketService.paymentSum += this.product.price;
    }
  }
  remove = () => {
    this.multiplication -= 1;
    if (this.product.inBasket) {
      this._basketService.paymentSum -= this.product.price;
    }
  }
  toggle = (inBasket: boolean) => {
    if (this.product.inBasket !== inBasket || !inBasket) {
      this.product.inBasket = inBasket;
      this._basketService.paymentSum += inBasket
        ? this.product.price * this.multiplication
        : -this.product.price * this.multiplication;
    }
  }
}
