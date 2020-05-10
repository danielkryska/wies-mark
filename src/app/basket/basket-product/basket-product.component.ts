import { IProduct } from '@shared/models/product.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent {
  public productMultiplication = 1;

  @Input() product: IProduct;
  @Input() isSummary: boolean;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeSameProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output() addSameProduct: EventEmitter<void> = new EventEmitter<void>();

  addSame = () => {
    this.productMultiplication += 1;
    this.addSameProduct.emit();
  }
  removeSame = () => {
    this.productMultiplication -= 1;
    this.removeSameProduct.emit();
  }
  get isProductMinimumStack() {
    return this.productMultiplication === 1;
  }
}
