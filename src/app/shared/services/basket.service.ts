import { Injectable } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';

import * as _ from 'lodash';
import { IDeliveryType } from './delivery-types.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

export interface IBasketProduct {
  product: IProduct;
  multiplication: number;
}

export interface IBasketSupplier {
  name: string;
  products: IBasketProduct[];
  deliveryType?: IDeliveryType;
}

@Injectable({ providedIn: 'root' })
export class BasketService {
  public basketSuppliers: IBasketSupplier[] = [];
  public isSummary = false;

  get payment() {
    return this.isSummary ? this.summaryPayment : this.productsPayment;
  }
  get allSuppliersHasSetDeliveries() {
    return this.summarySuppliers.length === this.suppliersWithDelivery.length;
  }
  get summarySuppliers() {
    return this.basketSuppliers.filter((supplier) => supplier.products.some((product) => product.product.inBasket));
  }
  get suppliersWithDelivery() {
    return this.summarySuppliers.filter((supplier) => !!supplier.deliveryType);
  }
  get productsPayment() {
    return this.productsInBasket.reduce(
      (productsPayment, product) => (productsPayment += product.multiplication * product.product.price),
      0
    );
  }
  get productsInBasket() {
    return this.basketSuppliers
      .map((supplier) => supplier.products)
      .map((products) => products.filter((product) => product.product.inBasket))
      .reduce((allProducts, productsInBasket) => (allProducts = [...allProducts, ...productsInBasket]), []);
  }
  get summaryPayment() {
    return this.productsPayment + this.deliveriesPayment;
  }
  get deliveriesPayment() {
    return this.suppliersWithDelivery.reduce(
      (deliveriesPayment, supplier) => (deliveriesPayment += supplier.deliveryType.price),
      0
    );
  }

  constructor(
    private _productsService: ProductsService,
    private _toastController: ToastController,
    private _router: Router
  ) {
    this._productsService
      .getBy$({ inBasket: true })
      .subscribe((products: IProduct[]) => products.forEach((product) => this.add(product)));
  }

  public clear = () => {
    this.productsInBasket.forEach((product) => (product.product.inBasket = false));
    this.basketSuppliers = [];
  };

  public add(product: IProduct) {
    product.inBasket = true;
    const supplier = this.getSupplierBy(product.supplier.name);
    !!supplier
      ? supplier.products.push({ multiplication: 1, product })
      : this.basketSuppliers.push(this._createSupplierWith(product));

    // TODO Add into server
  }

  public remove(product: IProduct) {
    product.inBasket = false;
    const supplier = this.getSupplierBy(product.supplier.name);
    _.remove(supplier.products, (basketProduct) => _.isEqual(basketProduct, product));

    // TODO remove from server
  }

  public removeOutOfBasket() {
    this.basketSuppliers.forEach((basketSupplier) => {
      _.remove(basketSupplier.products, (basketProduct) => !basketProduct.product.inBasket);
      _.remove(this.basketSuppliers, (supplier) => supplier.products.length === 0);
    });

    // TODO update on server
  }

  public getSupplierBy(name: string) {
    return this.basketSuppliers.find((basketSupplier) => basketSupplier.name === name);
  }

  public async order() {
    this._router.navigateByUrl('zakladki/jarmark');
    const toast = await this._toastController.create({
      color: 'success',
      duration: 2000,
      message: 'Twoje zamówienie zostało złożone',
      position: 'top',
    });

    await toast.present();

    // TODO send to server to update history of buy + API send email to user/supplier
  }

  protected _createSupplierWith(product: IProduct) {
    return {
      name: product.supplier.name,
      products: [
        {
          multiplication: 1,
          product,
        },
      ],
    };
  }

  protected _getSameBasketProductBy(supplier: IBasketSupplier, product: IProduct) {
    return supplier.products.find((basketProduct) => _.isEqual(basketProduct.product, product));
  }
}
