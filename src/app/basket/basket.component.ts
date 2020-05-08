import { untilDestroyed } from 'ngx-take-until-destroy';
import { ProductsService } from './../shared/services/products.service';
import { IMarketProduct } from './../shared/models/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  public suppliersProducts: {[supplierName: string]: IMarketProduct[]} = {};
  public productsMultiplications: {[productID: string]: number} = {};
  public paymentSum: number;

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    const isInBasket = (product: IMarketProduct): boolean => !!product.inBasket;
    this._productsService.getProducts$([isInBasket])
      .pipe(untilDestroyed(this))
      .subscribe((products: IMarketProduct[]) => {
        this.paymentSum = products.reduce((sum, product) => sum += product.price, 0);
        products.forEach((product: IMarketProduct) => this.initiateProductMultiplication(product));
        this.suppliersProducts = _.groupBy(products, 'supplier.name');
      });
  }

  get hasProducts(): boolean {
    return !!this.suppliersProducts && Object.keys(this.suppliersProducts).length > 0;
  }

  initiateProductMultiplication = (product: IMarketProduct) => {
    const productID = product.title + product.supplier.name;
    this.productsMultiplications[productID] = 1;
  }

  decreaseProductsType = (product: IMarketProduct) => {
    const productID = product.title + product.supplier.name;
    this.paymentSum = this.productsMultiplications[productID] === 1
      ? this.paymentSum
      : this.paymentSum - product.price;
    this.productsMultiplications[productID] = this.productsMultiplications[productID] === 1
      ? this.productsMultiplications[productID]
      : this.productsMultiplications[productID] - 1;
  }

  increaseProductsType = (product: IMarketProduct) => {
    const productID = product.title + product.supplier.name;
    this.paymentSum = this.paymentSum + product.price;
    this.productsMultiplications[productID] = this.productsMultiplications[productID] + 1;
  }

  toggleSupplierProducts = (supplierName: string, event: any) => {
    this.suppliersProducts[supplierName]
      .forEach((product: IMarketProduct) => product.inBasket = event.target.checked);
  }

  toggleProduct = (product: IMarketProduct, event: any) => {
    product.inBasket = event.target.checked;
    this.paymentSum += event.target.checked
      ? product.price
      : -product.price;
  }

  isSupplierChecked = (supplierName: string) => _.some(this.suppliersProducts[supplierName], (product: IMarketProduct) => product.inBasket);

  ngOnDestroy() {}
}
