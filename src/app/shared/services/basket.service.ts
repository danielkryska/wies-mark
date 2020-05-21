import { Injectable } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';

import * as _ from 'lodash';

export interface ISuppliersProducts {
  [supplierName: string]: IProduct[];
}

@Injectable({ providedIn: 'root' })
export class BasketService {
  public suppliersProducts: ISuppliersProducts;
  public paymentSum: number;

  get anyProduct(): boolean {
    return !!this.suppliersProducts && Object.keys(this.suppliersProducts).length > 0;
  }
  get suppliers() {
    return Object.keys(this.suppliersProducts);
  }
  get suppliersProducts$() {
    return this.suppliersProducts$;
  }

  constructor(private _productsService: ProductsService) {
    this._productsService.getBy$({inBasket: true})
      .subscribe((products: IProduct[]) => {
        this.paymentSum = products.reduce((sum, product) => sum += product.price, 0);
        this.suppliersProducts = _.groupBy(products, 'supplier.name');
      });
  }

  public getSupplierProducts = (supplierName: string) => this.suppliersProducts[supplierName];

  public add(product: IProduct) {
    product.inBasket = true;
    const supplierName = product.supplier.name;
    Object.keys(this.suppliersProducts).includes(product.supplier.name)
      ? this.suppliersProducts[supplierName].push(product)
      : this.suppliersProducts[supplierName] = [product];
    this.paymentSum += product.price;

    // TODO Add into server
  }

  public remove(product: IProduct) {
    product.inBasket = false;
    const supplierName = product.supplier.name;
    _.remove(this.suppliersProducts[supplierName], product);
    Object.keys(this.suppliersProducts)
      .filter(supplierName => this.suppliersProducts[supplierName].length === 0)
      .forEach(supplierName => delete(this.suppliersProducts[supplierName]));
    this.paymentSum -= product.price;

    // TODO remove from server
  }
}
