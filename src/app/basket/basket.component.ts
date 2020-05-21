import { Router } from '@angular/router';
import { SummaryService } from '@shared/services/summary.service';
import { BasketService } from '@shared/services/basket.service';
import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  get suppliers() {
    return this._basketService.suppliers;
  }
  get anyProduct() {
    return this._basketService.anyProduct;
  }
  get isSummary() {
    return this._summaryBasket.isSummary;
  }
  set isSummary(isSummary: boolean) {
    this._summaryBasket.isSummary = isSummary;
  }
  get paymentSum() {
    return this._summaryBasket.isSummary
      ? this._basketService.paymentSum + this._summaryBasket.deliveryPaymentSum
      : this._basketService.paymentSum;
  }
  get hasAllDeliveryTypes() {
    return this._summaryBasket.hasAllDeliveryTypes;
  }

  constructor(
    private _basketService: BasketService,
    private _summaryBasket: SummaryService,
    private _router: Router
  ) {
    this._router.events
      .subscribe(() => {
        if (this._summaryBasket.isSummary) {
          this._summaryBasket.isSummary = false;
        }

        if (this._router.url === '/zakladki/koszyk' && !!this._basketService.suppliersProducts) {
          Object.keys(this._basketService.suppliersProducts)
            .forEach(supplierName => {
              this._basketService.suppliersProducts[supplierName]
                .filter(product => !product.inBasket)
                .forEach(product => _.remove(this._basketService.suppliersProducts[supplierName], product));
            });

          Object.keys(this._basketService.suppliersProducts)
            .filter(supplierName => this._basketService.suppliersProducts[supplierName].length === 0)
            .forEach(supplierName => delete(this._basketService.suppliersProducts[supplierName]));
        }
      });
  }

  order = () => this._summaryBasket.order();
  hasProductsInBasket = (supplierName: string) => this._basketService.suppliersProducts[supplierName]
    .some(product => product.inBasket)
}
