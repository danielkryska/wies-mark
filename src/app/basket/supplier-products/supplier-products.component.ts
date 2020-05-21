import { BasketService } from '@shared/services/basket.service';
import { IDeliveryType } from '../../shared/services/delivery-types.service';
import { Component, Input } from '@angular/core';

import * as _ from 'lodash';
import { DeliveryTypeComponent } from '../delivery-type/delivery-type.component';
import { SummaryService } from '@shared/services/summary.service';
import { ModalController } from '@ionic/angular';

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
    return this._summaryService.suppliersDeliveryTypes[this.supplierName];
  }
  get hasProducts(): boolean {
    return !!this._basketService.suppliersProducts[this.supplierName];
  }
  get isSummary() {
    return this._summaryService.isSummary;
  }

  constructor(
    private _basketService: BasketService,
    private _summaryService: SummaryService,
    private _modalController: ModalController
  ) {}

  public toggleProducts = (inBasket: boolean) => this.products
    .forEach(product => product.inBasket = inBasket)
  public async chooseDeliveryType() {
    const modal = await this._modalController.create({
      component: DeliveryTypeComponent,
      componentProps: { supplierName: this.supplierName }
    });

    modal.onDidDismiss()
      .then(data => !!data.data ? this._summaryService.setDeliveryType(this.supplierName, data.data) : null);

    return await modal.present();
  }
}
