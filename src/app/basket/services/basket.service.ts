import { IDeliveryType } from './delivery-types.service';
import { Injectable } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';

import * as _ from 'lodash';
import { DeliveryTypeComponent } from '../delivery-type/delivery-type.component';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public suppliersProducts: {[supplierName: string]: IProduct[]};
  public suppliersDeliveryTypes: {[supplierName: string]: IDeliveryType};

  public paymentSum: number;
  public isSummary: boolean;

  get anyProduct(): boolean {
    return !!this.suppliersProducts && Object.keys(this.suppliersProducts).length > 0;
  }
  get suppliers() {
    return Object.keys(this.suppliersProducts);
  }
  get hasAllDeliveryTypes() {
    const supplierHavingProducts = Object.keys(this.suppliersProducts)
      .filter(supplierName => this.hasProducts(supplierName));
    const suppliersDeliveriesTypes = Object.keys(this.suppliersDeliveryTypes);

    return supplierHavingProducts.length === suppliersDeliveriesTypes.length;
  }

  constructor(
    private _productsService: ProductsService,
    private _router: Router,
    private _toastController: ToastController,
    private _modalController: ModalController
  ) {
    this._initializeBasket();
  }

  public loadSuppliersProducts() {
    // TODO Keep basket products in service and in cloud
    this._productsService.products$
      .subscribe((products: IProduct[]) => {
        this.paymentSum = products.reduce((sum, product) => sum += product.price, 0);
        this.suppliersProducts = _.groupBy(products, 'supplier.name');
      });
  }

  public hasProducts = (supplierName: string) => this.suppliersProducts[supplierName]
    .some(product => product.inBasket)

  // TODO Send to supplier on order
  public async order() {
    this._initializeBasket();
    this._router.navigateByUrl('zakladki/jarmark');
    const toast = await this._toastController.create({
      color: 'success',
      duration: 2000,
      message: 'Twoje zamówienie zostało złożone',
      position: 'top'
    });
    await toast.present();
  }

  public async chooseDeliveryType(supplierName: string) {
    const modal = await this._modalController.create({
      component: DeliveryTypeComponent,
      componentProps: { supplierName }
    });

    modal.onDidDismiss()
      .then(data => {
        if (!!data.data) {
          if (!!this.suppliersDeliveryTypes[supplierName]) {
            this.paymentSum -= this.suppliersDeliveryTypes[supplierName].price;
          }
          this.suppliersDeliveryTypes[supplierName] = data.data;
          this.paymentSum += data.data.price;
        }
      });

    return await modal.present();
  }

  protected _initializeBasket() {
    this.suppliersProducts = {};
    this.suppliersDeliveryTypes = {};
    this.paymentSum = 0;
    this.isSummary = false;
  }
}
