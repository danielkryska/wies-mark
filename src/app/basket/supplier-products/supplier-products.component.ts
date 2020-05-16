import { BasketService } from './../services/basket.service';
import { IDeliveryType } from './../services/delivery-types.service';
import { Component, Input } from '@angular/core';
import { IProduct } from '@shared/models/product.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-supplier-products',
  templateUrl: './supplier-products.component.html',
  styleUrls: ['./supplier-products.component.scss']
})
export class SupplierProductsComponent {
  @Input() supplierName: string;

  get products() {
    return this._basketService.suppliersProducts[this.supplierName];
  }
  get deliveryType(): IDeliveryType {
    return this._basketService.suppliersDeliveryTypes[this.supplierName];
  }
  get hasProducts(): boolean {
    return this._basketService.hasProducts(this.supplierName);
  }
  get isSummary() {
    return this._basketService.isSummary;
  }

  constructor(private _basketService: BasketService) {}

  chooseDeliveryType = () => this._basketService.chooseDeliveryType(this.supplierName);
  toggleProducts = (inBasket: boolean) => this.products
    .forEach(product => product.inBasket = inBasket)
}