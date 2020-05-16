import { BasketService } from './services/basket.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  get anyProduct() {
    return this._basketService.anyProduct;
  }
  get isSummary() {
    return this._basketService.isSummary;
  }
  set isSummary(isSummary: boolean) {
    this._basketService.isSummary = isSummary;
  }
  get suppliers() {
    return this._basketService.suppliers;
  }
  get paymentSum() {
    return this._basketService.paymentSum;
  }
  get hasAllDeliveryTypes() {
    return this._basketService.hasAllDeliveryTypes;
  }

  constructor(private _basketService: BasketService) {}

  ngOnInit() {
    this._basketService.loadSuppliersProducts();
  }

  order = () => this._basketService.order();
  hasProductsInBasket = (supplierName: string) => this._basketService.hasProducts(supplierName);
}
