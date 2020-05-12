import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ProductsService } from '@shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as _ from 'lodash';
import { ToastController, ModalController } from '@ionic/angular';
import { IProduct } from '@shared/models/product.model';
import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  public isSummary = false;
  public suppliersProducts: {[supplierName: string]: IProduct[]} = {};
  public paymentSum: number;

  constructor(
    private _productsService: ProductsService,
    private _router: Router,
    private _toastController: ToastController,
    private _modalController: ModalController
  ) {}

  ngOnInit() {
    // TODO Keep in basket products in service and in cloud
    this._productsService.products$
      .pipe(untilDestroyed(this))
      .subscribe((products: IProduct[]) => {
        this.paymentSum = products.reduce((sum, product) => sum += product.price, 0);
        this.suppliersProducts = _.groupBy(products, 'supplier.name');
      });
  }

  get hasProducts(): boolean {
    return !!this.suppliersProducts && Object.keys(this.suppliersProducts).length > 0;
  }

  toggleSupplierProducts = (supplierName: string, event: any) => this.suppliersProducts[supplierName]
    .forEach((product: IProduct) => product.inBasket = event.target.checked)
  toggleProduct = (product: IProduct, isChecked: boolean) => this.paymentSum += isChecked ? product.price : -product.price;

  async order() {
    this._router.navigateByUrl('zakladki/jarmark');
    this.suppliersProducts = {};
    this.paymentSum = 0;
    this.isSummary = false;

    const toast = await this._toastController.create({
      color: 'success',
      duration: 2000,
      message: 'Twoje zamówienie zostało złożone',
      position: 'top'
    });
    toast.present();
  }

  isSupplierChecked = (supplierName: string) => _.some(this.suppliersProducts[supplierName], (product: IProduct) => product.inBasket);

  async chooseDeliveryType() {
    const modal = await this._modalController.create({
      component: DeliveryTypeComponent
    });
    return await modal.present();
  }

  ngOnDestroy() {}
}
