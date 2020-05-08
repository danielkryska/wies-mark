import { DEFAULT_SORT_TYPE } from './../models/sort-type.model';
import { map } from 'rxjs/operators';
import { IMarketProduct } from './../models/product.model';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  public getProducts$ = (
    filters: ((product: IMarketProduct) => boolean)[] = [],
    sortType: string = DEFAULT_SORT_TYPE
  ): Observable<IMarketProduct[]> => this._http
    .get<IMarketProduct[]>(`${environment.API_URL}/products`)
    .pipe(
      map((products: IMarketProduct[]) => {
        let filteredProducts = products;
        filters
          .forEach((productFilter: (product: IMarketProduct) => boolean) => {
            filteredProducts = filteredProducts.filter(productFilter);
          });

        const {iteratees, orders} = this._getSortProperties(sortType);
        return _.orderBy(filteredProducts, iteratees, orders);
      })
    );

  // TODO remove after creation of API endpoint /products
  protected _getSortProperties = (sortType: string) => ({
      popularityOfSuppliers: {
        iteratees: ['averageOfRates', 'opinionsCount'],
        orders: ['desc', 'desc']
      },
      popularityOfProducts: {
        iteratees: ['supplier.averageOfRates', 'supplier.opinionsCount'],
        orders: ['desc', 'desc']
      },
      priceLowest: {
        iteratees: ['price'],
        orders: ['asc']
      },
      priceHighest: {
        iteratees: ['price'],
        orders: ['desc']
      },
      dateLatest: {
        iteratees: ['creationDate'],
        orders: ['desc']
      },
    })[sortType]
}
