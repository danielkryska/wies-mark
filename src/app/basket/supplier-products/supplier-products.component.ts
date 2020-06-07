import { Router } from '@angular/router';
import { SearchService } from '@shared/services/search.service';
import { MessagesService } from '@shared/services/messages.service';
import { Component, Input } from '@angular/core';

import * as _ from 'lodash';
import { DeliveryTypeComponent } from '../delivery-type/delivery-type.component';
import { ModalController } from '@ionic/angular';
import { MessageComponent } from '@shared/components/message/message.component';
import { IBasketSupplier } from '@shared/services/basket.service';

@Component({
  selector: 'app-supplier-products',
  templateUrl: './supplier-products.component.html'
})
export class SupplierProductsComponent {
  @Input() supplier: IBasketSupplier;
  @Input() isSummary: boolean;

  get isChecked() {
    return this.isChecked || this.allProductsInBasket;
  }
  get anyProductInBasket() {
    return this.supplier.products.some(product => product.product.inBasket);
  }
  get allProductsInBasket() {
    return !this.supplier.products.some(product => !product.product.inBasket);
  }

  constructor(
    private _modalController: ModalController,
    private _messagesService: MessagesService,
    private _searchService: SearchService,
    private _router: Router
  ) {}

  searchForSupplierProducts() {
    this._searchService.filters = { 'supplier.name': this.supplier.name };
    this._router.navigateByUrl('zakladki/szukaj');
  }

  public openMessageDialog = async () => {
    const conversation = this._messagesService.getConversationBy(this.supplier.name);
    const modal = await this._modalController.create({
      component: MessageComponent,
      componentProps: { conversation }
    });
    this._messagesService.markAsRead(conversation);

    return await modal.present();
  };
  public toggleProducts = (isChecked: boolean) => {
    if (!isChecked && this.anyProductInBasket) {
      this.supplier.products.forEach(basketProduct => (basketProduct.product.inBasket = false));
    }

    if (isChecked && !this.anyProductInBasket) {
      this.supplier.products.forEach(basketProduct => (basketProduct.product.inBasket = true));
    }
  };
  public async chooseDeliveryType() {
    const modal = await this._modalController.create({
      component: DeliveryTypeComponent,
      componentProps: { supplierName: this.supplier.name }
    });

    modal
      .onDidDismiss()
      .then(data => (!!data.data ? (this.supplier.deliveryType = data.data) : null));

    return await modal.present();
  }
}
