import { map } from 'rxjs/operators';
import { ProductsService } from './products.service';
import { IProduct } from '@shared/models/product.model';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'lodash';

const dateFromTimeStamp = timestamp => moment.unix(timestamp).format('DD/MM/YYYY');

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  public dateProducts: { [date: string]: IProduct[] } = {};

  // TODO Archive service
  constructor(private _productsService: ProductsService) {
    // TODO filter { orderDate: 'exists' }
    this._productsService
      .getBy$({})
      .pipe(
        map(products => {
          return products.map(product => {
            product.orderDate = moment()
              .subtract(Math.round(Math.random() * 3 + 10), 'days')
              .unix();
            return product;
          });
        })
      )
      .subscribe(products => this.add(...products));
  }

  add(...products: IProduct[]) {
    let dates = Object.keys(this.dateProducts);
    products.forEach(product => {
      const date = dateFromTimeStamp(product.orderDate);
      const dateExist = dates.indexOf(date) > -1;
      this.dateProducts[date] = dateExist ? [product, ...this.dateProducts[date]] : [product];
      dates = dateExist ? dates : [...dates, date];
    });
  }
}
